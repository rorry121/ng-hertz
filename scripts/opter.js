const fs = require('fs');

let cacheDependenciesObj = Object.create({
  CONFIG_PATH: './.opterconfig',

  opterconfig: null,

  init: function () {
    this.initOpterconfig();
  },

  initOpterconfig: function () {
    if (this.opterconfig) {
      return false;
    }
    let configPath = this.CONFIG_PATH;
    if (!fs.existsSync(configPath)) {
      fs.writeFileSync(configPath, '{}', 'utf8');
    }
    let config;
    try {
      config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    } catch {
      config = {};
    }
    this.opterconfig = config;

    return true;
  },

  /**
   * 获取上次保存下来的npm依赖包
   * @return {Object}
   */
  readCacheDependencies: function () {
    this.initOpterconfig();
    let cacheDependencies = {};
    cacheDependencies = this.opterconfig['npmDependencies'] || {};

    return cacheDependencies;
  },

  /**
   * 保存最新的npm依赖包
   * @param  {Object} 最新的npm依赖包
   * @return {Boolean}
   */
  updateCacheDependencies: function (newestDependencies) {
    let opterconfig = this.opterconfig;
    opterconfig['npmDependencies'] = newestDependencies;
    fs.writeFileSync(this.CONFIG_PATH, JSON.stringify(opterconfig), 'utf8');
  }
});

/**
 * 获取当前项目最新的npm依赖包
 * @return {Object}
 */
function readNewestDependencies() {
  let packageDataStr = fs.readFileSync('./package.json', 'utf8');
  packageData = JSON.parse(packageDataStr);
  let dependencies = packageData.dependencies;
  let devDependencies = packageData.devDependencies;
  if (!!devDependencies) {
    Object.keys(devDependencies).forEach(function (packageName) {
      if (!dependencies[packageName]) {
        dependencies[packageName] = devDependencies[packageName];
      }
    });
  }

  return dependencies;
}

function getNeedInstalledPackageInfo() {
  cacheDependenciesObj.init();
  let cacheDependencies = cacheDependenciesObj.readCacheDependencies();
  let dependencies = readNewestDependencies();

  let needInstalledPackageInfo;

  // 没有安装过npm包
  if (!Object.keys(cacheDependencies).length) {
    needInstalledPackageInfo = {
      type: 'all',
      dependencies: dependencies
    };
  } else {
    let needInstalledPackageList = [];
    Object.keys(dependencies).forEach(function (packageName) {
      let packageVersion = dependencies[packageName];
      if (!cacheDependencies[packageName] || cacheDependencies[packageName] !== packageVersion) {
        needInstalledPackageList.push([packageName, packageVersion]);
      }
    });

    needInstalledPackageInfo = {
      type: needInstalledPackageList.length ? 'part' : 'none',
      needInstalledPackageList: needInstalledPackageList,
      dependencies: dependencies
    };
  }

  return needInstalledPackageInfo;
}

function main() {
  let needInstalledPackageInfo = getNeedInstalledPackageInfo();

  let npmInstallCommand;
  switch (needInstalledPackageInfo.type) {
    case 'all':
      npmInstallCommand = 'npm i';
      break;
    case 'part':
      let needInstalledPackageList = needInstalledPackageInfo.needInstalledPackageList;
      npmInstallCommand =
        'npm i ' +
        needInstalledPackageList
          .map(function (needInstalledPackage) {
            return needInstalledPackage[0] + '@' + needInstalledPackage[1].replace(/^\^/, '');
          })
          .join(' ');
      break;
  }

  if (npmInstallCommand) {
    let process = require('child_process');
    console.log('需要安装npm包');
    console.log('开始安装：', npmInstallCommand);
    npmInstallProcess = process.exec(npmInstallCommand, function (error, stdout, stderr) {
      if (error) {
        console.log(error);
      } else {
        cacheDependenciesObj.updateCacheDependencies(needInstalledPackageInfo.dependencies);
      }
      console.log(stdout);
    });
    npmInstallProcess.stdout.on('data', function (data) {
      if (data) {
        console.log('stdout: ' + data.toString());
      }
    });
    npmInstallProcess.stderr.on('data', function (data) {
      if (data) {
        console.log('stderr: ' + data.toString());
      }
    });
  } else {
    console.log('本次没有需要安装的npm包');
  }
}

main();
