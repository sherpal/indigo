
'use strict';

const config =
    GameConfigOps.default
        .withViewport(new GameViewport(200, 100))
        .withClearColor(new ClearColor(1, 0, 1, 1))
        .withFrameRate(30)
        .withMagnification(2);

const assets = [
  new ImageAsset('boxyFont', 'assets/boxy_font.png'),
  new ImageAsset('trafficLights', 'assets/trafficlights.png'),
  new ImageAsset('graphics', 'assets/graphics.png'),
];

const fontChars = [
  new FontChar('A', new Rectangle(3, 78, 23, 23)),
  new FontChar('B', new Rectangle(26, 78, 23, 23)),
  new FontChar('C', new Rectangle(50, 78, 23, 23)),
  new FontChar('D', new Rectangle(73, 78, 23, 23)),
  new FontChar('E', new Rectangle(96, 78, 23, 23)),
  new FontChar('F', new Rectangle(119, 78, 23, 23)),
  new FontChar('G', new Rectangle(142, 78, 23, 23)),
  new FontChar('H', new Rectangle(165, 78, 23, 23)),
  new FontChar('I', new Rectangle(188, 78, 15, 23)),
  new FontChar('J', new Rectangle(202, 78, 23, 23)),
  new FontChar('K', new Rectangle(225, 78, 23, 23)),
  new FontChar('L', new Rectangle(248, 78, 23, 23)),
  new FontChar('M', new Rectangle(271, 78, 23, 23)),
  new FontChar('N', new Rectangle(3, 104, 23, 23)),
  new FontChar('O', new Rectangle(29, 104, 23, 23)),
  new FontChar('P', new Rectangle(54, 104, 23, 23)),
  new FontChar('Q', new Rectangle(75, 104, 23, 23)),
  new FontChar('R', new Rectangle(101, 104, 23, 23)),
  new FontChar('S', new Rectangle(124, 104, 23, 23)),
  new FontChar('T', new Rectangle(148, 104, 23, 23)),
  new FontChar('U', new Rectangle(173, 104, 23, 23)),
  new FontChar('V', new Rectangle(197, 104, 23, 23)),
  new FontChar('W', new Rectangle(220, 104, 23, 23)),
  new FontChar('X', new Rectangle(248, 104, 23, 23)),
  new FontChar('Y', new Rectangle(271, 104, 23, 23)),
  new FontChar('Z', new Rectangle(297, 104, 23, 23)),
  new FontChar('0', new Rectangle(3, 26, 23, 23)),
  new FontChar('1', new Rectangle(26, 26, 15, 23)),
  new FontChar('2', new Rectangle(41, 26, 23, 23)),
  new FontChar('3', new Rectangle(64, 26, 23, 23)),
  new FontChar('4', new Rectangle(87, 26, 23, 23)),
  new FontChar('5', new Rectangle(110, 26, 23, 23)),
  new FontChar('6', new Rectangle(133, 26, 23, 23)),
  new FontChar('7', new Rectangle(156, 26, 23, 23)),
  new FontChar('8', new Rectangle(179, 26, 23, 23)),
  new FontChar('9', new Rectangle(202, 26, 23, 23)),
  new FontChar('?', new Rectangle(93, 52, 23, 23)),
  new FontChar('!', new Rectangle(3, 0, 15, 23)),
  new FontChar('.', new Rectangle(286, 0, 15, 23)),
  new FontChar(',', new Rectangle(248, 0, 15, 23)),
  new FontChar(' ', new Rectangle(145, 52, 23, 23)),
];

const fonts = [
  new FontInfo(
      'My Font',
      'boxyFont',
      320,
      230,
      new FontChar('?', new Rectangle(93, 52, 23, 23)),
      fontChars,
      false
  ),
];

const animations = [
  new Animation(
      'traffic-lights',
      'trafficLights',
      new Point(128, 128),
      'lights',
      [
        new Cycle(
            'lights',
            [
              new Frame(new Rectangle(0, 0, 64, 64), 250),
              new Frame(new Rectangle(64, 0, 64, 64), 250),
              new Frame(new Rectangle(0, 64, 64, 64), 250),
            ],
            0,
            0
        ),
      ],
      [],
  ),
];

Indigo.init(
    config,
    assets,
    fonts,
    animations
);
