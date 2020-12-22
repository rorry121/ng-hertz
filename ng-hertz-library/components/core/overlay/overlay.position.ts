import { ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
export type OverLayPlacement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'right'
  | 'rightTop'
  | 'rightBottom'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom';

export class OverlayPositionTop extends ConnectionPositionPair {
  constructor(offsetX?: number | undefined, offsetY?: number | undefined) {
    super({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}

export class OverlayPositionTopLeft extends ConnectionPositionPair {
  constructor(offsetX?: number | undefined, offsetY?: number | undefined) {
    super({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}
export class OverlayPositionTopRight extends ConnectionPositionPair {
  constructor(offsetX?: number | undefined, offsetY?: number | undefined) {
    super({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}
export class OverlayPositionRight extends ConnectionPositionPair {
  constructor(offsetX?: number | undefined, offsetY?: number | undefined) {
    super({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}
export class OverlayPositionRightTop extends ConnectionPositionPair {
  constructor(offsetX?: number | undefined, offsetY?: number | undefined) {
    super({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}

export class OverlayPositionRightBottom extends ConnectionPositionPair {
  constructor(offsetX?: number | undefined, offsetY?: number | undefined) {
    super({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}

export class OverlayPositionBottom extends ConnectionPositionPair {
  constructor(offsetX?: number | undefined, offsetY?: number | undefined) {
    super({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}

export class OverlayPositionBottomLeft extends ConnectionPositionPair {
  constructor(offsetX?: number | undefined, offsetY?: number | undefined) {
    super({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}

export class OverlayPositionBottomRight extends ConnectionPositionPair {
  constructor(offsetX?: number | undefined, offsetY?: number | undefined) {
    super({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}

export class OverlayPositionLeft extends ConnectionPositionPair {
  constructor(offsetX?: number | undefined, offsetY?: number | undefined) {
    super({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}

export class OverlayPositionLeftTop extends ConnectionPositionPair {
  constructor(offsetX?: number | undefined, offsetY?: number | undefined) {
    super({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}

export class OverlayPositionLeftBottom extends ConnectionPositionPair {
  constructor(offsetX?: number | undefined, offsetY?: number | undefined) {
    super({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}

export const OverlayPositionMap: Record<OverLayPlacement, ConnectionPositionPair> = {
  top: new OverlayPositionTop(),
  topLeft: new OverlayPositionTopLeft(),
  topRight: new OverlayPositionTopRight(),
  right: new OverlayPositionRight(),
  rightTop: new OverlayPositionRightTop(),
  rightBottom: new OverlayPositionRightBottom(),
  bottom: new OverlayPositionBottom(),
  bottomLeft: new OverlayPositionBottomLeft(),
  bottomRight: new OverlayPositionBottomRight(),
  left: new OverlayPositionLeft(),
  leftTop: new OverlayPositionLeftTop(),
  leftBottom: new OverlayPositionLeftBottom()
};

export const OverlayPositionMapOffset4: Record<OverLayPlacement, ConnectionPositionPair> = {
  top: new OverlayPositionTop(0, -4),
  topLeft: new OverlayPositionTopLeft(0, -4),
  topRight: new OverlayPositionTopRight(0, -4),
  right: new OverlayPositionRight(4, 0),
  rightTop: new OverlayPositionRightTop(4, 0),
  rightBottom: new OverlayPositionRightBottom(4, 0),
  bottom: new OverlayPositionBottom(0, 4),
  bottomLeft: new OverlayPositionBottomLeft(0, 4),
  bottomRight: new OverlayPositionBottomRight(0, 4),
  left: new OverlayPositionLeft(-4, 0),
  leftTop: new OverlayPositionLeftTop(-4, 0),
  leftBottom: new OverlayPositionLeftBottom(-4, 0)
};

export function getPlacementName(position: ConnectedOverlayPositionChange): OverLayPlacement {
  for (const placement in OverlayPositionMap) {
    if (
      position.connectionPair.originX === OverlayPositionMap[placement].originX &&
      position.connectionPair.originY === OverlayPositionMap[placement].originY &&
      position.connectionPair.overlayX === OverlayPositionMap[placement].overlayX &&
      position.connectionPair.overlayY === OverlayPositionMap[placement].overlayY
    ) {
      return placement as OverLayPlacement;
    }
  }
  return undefined;
}
