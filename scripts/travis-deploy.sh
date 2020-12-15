  cd ~
  rm -rf ~/ng-hertz
  git clone https://github.com/rorry121/ng-hertz.git --depth=1
  cd ./ng-hertz
  pwd
  npm i
  npm run build:doc
  cd build
  tar -zcvf ng-hertz-doc.tar.gz  ./ng-hertz-doc
  cp ng-hertz-doc.tar.gz /www/wwwroot/ssr/panel/public/ng-hertz-doc.tar.gz
  cd /www/wwwroot/ssr/panel/public/
  tar -xzvf ng-hertz-doc.tar.gz
  exit
