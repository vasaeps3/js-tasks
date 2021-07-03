const assert = require('assert');
const {
  removeLeadingTrailing,
  removeABC,
  multiplyNums,
  evenOrOdd,
  reverseAndNot,
  XO,
  makeTitle,
  doubleLetters,
  neutralise,
  mumbling
} = require('../tasks/01-strings');

describe('01-strings.test', () => {
  it('removeLeadingTrailing', () => {
    assert.equal(removeLeadingTrailing('230.000'), '230');
    assert.equal(removeLeadingTrailing('00402'), '402');
    assert.equal(removeLeadingTrailing('03.1400'), '3.14');
    assert.equal(removeLeadingTrailing('30'), '30');
    assert.equal(removeLeadingTrailing('30.0000'), '30');
    assert.equal(removeLeadingTrailing('24340'), '24340');
    assert.equal(removeLeadingTrailing('0404040'), '404040');
    assert.equal(removeLeadingTrailing('0'), '0');
    assert.equal(removeLeadingTrailing('00'), '0');
    assert.equal(removeLeadingTrailing('0.000000'), '0');
    assert.equal(removeLeadingTrailing('0000.000'), '0');
    assert.equal(removeLeadingTrailing('00.0001'), '0.0001');
    assert.equal(removeLeadingTrailing('10000'), '10000');
    assert.equal(removeLeadingTrailing('1345'), '1345');
    assert.equal(removeLeadingTrailing('30.000020'), '30.00002');
    assert.equal(removeLeadingTrailing('00200.1900001'), '200.1900001');
  });

  it('removeABC', () => {
    assert.equal(removeABC('This might be a bit hard'), 'This might e  it hrd');
    assert.equal(removeABC('This is awesome'), 'This is wesome');
    assert.equal(removeABC('hello world!'), null);
    assert.equal(removeABC('coding is fun!'), 'oding is fun!');
    assert.equal(removeABC(''), null);
  });

  it('multiplyNums', () => {
    assert.equal(multiplyNums('2, 3'), 6);
    assert.equal(multiplyNums('1, 2, 3, 4'), 24);
    assert.equal(multiplyNums('54, 75, 453, 0'), 0);
    assert.equal(multiplyNums('10, -2'), -20);
    assert.equal(multiplyNums('-26, 1, -27, -12, -19'), 160056);
    assert.equal(multiplyNums('16, 8'), 128);
    assert.equal(multiplyNums('-27, -14, -28, 13, -17'), 2339064);
    assert.equal(multiplyNums('-19, -22, -14, 20, -15, -24, -17, 19, 30, -10'), -4082823360000);
    assert.equal(multiplyNums('1, 13, 0, -11, 26, -17, 21'), 0);
    assert.equal(multiplyNums('-25, -19, 7, -26, -26'), 2247700);
    assert.equal(multiplyNums('-4, -16, -22, -3, -6'), -25344);
    assert.equal(multiplyNums('-22, 11, 19, 5, 19, -9, -13, 20, -29'), 29641926600);
    assert.equal(multiplyNums('-25, 22'), -550);
    assert.equal(multiplyNums('26, -19, 17, 26, -21'), 4585308);
    assert.equal(multiplyNums('5, -1, 1, -28, 14, 28, 1'), 54880);
    assert.equal(multiplyNums('-27, -9, 6, -25, 4'), -145800);
    assert.equal(multiplyNums('-24, -13, -14, 30, 9, -14'), 16511040);
    assert.equal(multiplyNums('27, 25, 27, -18, -27, -7, 28, 27, 0'), 0);
    assert.equal(multiplyNums('-23, 11, -18, -5, -4'), 91080);
    assert.equal(multiplyNums('-16, -10, -29, -23, -30, -1'), 3201600);
    assert.equal(multiplyNums('-14, -17, 9, -2, -17, -10, -30'), 21848400);
    assert.equal(multiplyNums('-13, -23, 10, 0, -23'), 0);
    assert.equal(multiplyNums('0'), 0);
    assert.equal(multiplyNums('30'), 30);
    assert.equal(multiplyNums('-24, -21, 6, -29, 23, 11, -21, -29'), -13511936592);
    assert.equal(multiplyNums('4, 23, 10'), 920);
    assert.equal(multiplyNums('-13, -2, 28, 10, 25'), 182000);
    assert.equal(multiplyNums('-18, -6, -9, 7, -1, -4, 5, -2, 19'), 5171040);
    assert.equal(multiplyNums('-24, 15, -19, 20, -14, -8, 6, -22, 17'), -34381670400);
    assert.equal(multiplyNums('12, -12, -3, -12, 10, 16, -23, -5, 17'), -1621555200);
    assert.equal(multiplyNums('17'), 17);
    assert.equal(multiplyNums('9, -27, 9, -22, 24, -1'), -1154736);
    assert.equal(multiplyNums('16, -26, -1, -25, 13, 6, 26, 2, 4'), -168729600);
    assert.equal(multiplyNums('-13, 17, 29, 19, 7'), -852397);
    assert.equal(multiplyNums('28, 15, -7, -25'), 73500);
    assert.equal(multiplyNums('-8, 19, -11, -10, -3, -9, 30, 18'), -243777600);
    assert.equal(multiplyNums('22, -13, 29, 3, -29'), 721578);
    assert.equal(multiplyNums('18, -18, -8, -16'), -41472);
    assert.equal(multiplyNums('-12, -28, -19, 14, 27, 14, -3, 10, 13, 1'), 13175809920);
    assert.equal(multiplyNums('-26, -21, 27, 23, -22, 1'), -7459452);
    assert.equal(multiplyNums('5, -21, -26, -29, -8, 21, -5, -30, 1'), 1995084000);
    assert.equal(multiplyNums('-9, -7, -13, -15, -2'), -24570);
    assert.equal(multiplyNums('9, 25, 1, 28, 3, -3, -16, -26, 12, -26'), 7359206400);
    assert.equal(multiplyNums('-2, 4, -29'), 232);
    assert.equal(multiplyNums('26, 13, 17, -16, 6'), -551616);
    assert.equal(multiplyNums('-17'), -17);
    assert.equal(multiplyNums('26, -15, -12, 2, -1, 4, 20, 14, 25, 3'), -786240000);
    assert.equal(multiplyNums('8, -11'), -88);
    assert.equal(multiplyNums('12, -2, 8, 6, -23, 9, 13, 14'), 43400448);
    assert.equal(multiplyNums('-10, 19, -29, 3, 30, 20, -5'), -49590000);
    assert.equal(multiplyNums('19'), 19);
    assert.equal(multiplyNums('15, -28, 8, 7, -20, 24, 2'), 22579200);
    assert.equal(multiplyNums('25, -24, 4, 9, -17, 4, -24, -18, -3'), -1903564800);
    assert.equal(multiplyNums('8, -14, -30, 9, -14, 17, -14'), 100759680);
  });

  it('evenOrOdd', () => {
    assert.equal(evenOrOdd('12345'), 'Odd is greater than Even');
    assert.equal(evenOrOdd('143'), 'Even and Odd are the same');
    assert.equal(evenOrOdd('2221'), 'Even is greater than Odd');
    assert.equal(evenOrOdd('23456'), 'Even is greater than Odd');
    assert.equal(evenOrOdd('4321'), 'Even is greater than Odd');
    assert.equal(evenOrOdd('3245'), 'Odd is greater than Even');
    assert.equal(evenOrOdd('14256'), 'Even is greater than Odd');
    assert.equal(evenOrOdd('11234'), 'Even is greater than Odd');
    assert.equal(evenOrOdd('1734'), 'Odd is greater than Even');
    assert.equal(evenOrOdd('145'), 'Odd is greater than Even');
    assert.equal(evenOrOdd('22471'), 'Even and Odd are the same');
    assert.equal(evenOrOdd('213613'), 'Even and Odd are the same');
    assert.equal(evenOrOdd('23456'), 'Even is greater than Odd');
    assert.equal(evenOrOdd('9738'), 'Odd is greater than Even');
    assert.equal(evenOrOdd('34522'), 'Even and Odd are the same');
    assert.equal(evenOrOdd('12378'), 'Odd is greater than Even');
    assert.equal(evenOrOdd('45228'), 'Even is greater than Odd');
    assert.equal(evenOrOdd('4455'), 'Odd is greater than Even');
    assert.equal(evenOrOdd('6721'), 'Even and Odd are the same');
    assert.equal(evenOrOdd('92184'), 'Even is greater than Odd');
    assert.equal(evenOrOdd('12'), 'Even is greater than Odd');
    assert.equal(evenOrOdd('123'), 'Odd is greater than Even');
    assert.equal(evenOrOdd('112'), 'Even and Odd are the same');
    assert.equal(evenOrOdd('124'), 'Even is greater than Odd');
  });

  it('reverseAndNot', () => {
    assert.equal(reverseAndNot(123), 321123);
    assert.equal(reverseAndNot(123456789), 987654321123456789);
    assert.equal(reverseAndNot(496), 694496);
    assert.equal(reverseAndNot(307), 703307);
    assert.equal(reverseAndNot(500), 5500);
    assert.equal(reverseAndNot(321), 123321);
    assert.equal(reverseAndNot(564), 465564);
    assert.equal(reverseAndNot(66), 6666);
    assert.equal(reverseAndNot(553), 355553);
    assert.equal(reverseAndNot(518), 815518);
    assert.equal(reverseAndNot(152), 251152);
    assert.equal(reverseAndNot(273), 372273);
    assert.equal(reverseAndNot(603), 306603);
    assert.equal(reverseAndNot(864), 468864);
    assert.equal(reverseAndNot(170), 71170);
    assert.equal(reverseAndNot(96), 6996);
    assert.equal(reverseAndNot(869), 968869);
    assert.equal(reverseAndNot(960), 69960);
    assert.equal(reverseAndNot(471), 174471);
    assert.equal(reverseAndNot(925), 529925);
    assert.equal(reverseAndNot(235), 532235);
    assert.equal(reverseAndNot(389), 983389);
    assert.equal(reverseAndNot(293), 392293);
    assert.equal(reverseAndNot(586), 685586);
    assert.equal(reverseAndNot(218), 812218);
    assert.equal(reverseAndNot(262), 262262);
    assert.equal(reverseAndNot(610), 16610);
    assert.equal(reverseAndNot(75), 5775);
    assert.equal(reverseAndNot(699), 996699);
    assert.equal(reverseAndNot(298), 892298);
    assert.equal(reverseAndNot(532), 235532);
    assert.equal(reverseAndNot(211), 112211);
    assert.equal(reverseAndNot(602), 206602);
    assert.equal(reverseAndNot(804), 408804);
    assert.equal(reverseAndNot(195), 591195);
    assert.equal(reverseAndNot(271), 172271);
    assert.equal(reverseAndNot(449), 944449);
    assert.equal(reverseAndNot(938), 839938);
    assert.equal(reverseAndNot(257), 752257);
    assert.equal(reverseAndNot(205), 502205);
    assert.equal(reverseAndNot(345), 543345);
    assert.equal(reverseAndNot(365), 563365);
    assert.equal(reverseAndNot(112), 211112);
    assert.equal(reverseAndNot(792), 297792);
    assert.equal(reverseAndNot(777), 777777);
    assert.equal(reverseAndNot(759), 957759);
    assert.equal(reverseAndNot(239), 932239);
    assert.equal(reverseAndNot(469), 964469);
    assert.equal(reverseAndNot(953), 359953);
    assert.equal(reverseAndNot(574), 475574);
    assert.equal(reverseAndNot(155), 551155);
    assert.equal(reverseAndNot(238), 832238);
  });

  it('XO', () => {
    assert.equal(XO('ooxx'), true);
    assert.equal(XO('xooxx'), false);
    assert.equal(XO('ooxXm'), true);
    assert.equal(XO('zpzpzpp'), true);
    assert.equal(XO('zzoo'), false);
    assert.equal(XO('Xo'), true);
    assert.equal(XO('x'), false);
    assert.equal(XO('o'), false);
    assert.equal(XO('xxxoo'), false);
    assert.equal(XO(''), true);
  });

  it('makeTitle', () => {
    assert.equal(makeTitle('I am a title'), 'I Am A Title');
    assert.equal(makeTitle('I AM A TITLE'), 'I AM A TITLE');
    assert.equal(makeTitle('i aM a tITLE'), 'I AM A TITLE');
    assert.equal(makeTitle('the first letter of every word is capitalized'), 'The First Letter Of Every Word Is Capitalized');
    assert.equal(makeTitle('I Like Pizza'), 'I Like Pizza');
    assert.equal(makeTitle("Don't count your ChiCKens BeFore They HatCh"), "Don't Count Your ChiCKens BeFore They HatCh");
    assert.equal(makeTitle('All generalizations are false, including this one'), 'All Generalizations Are False, Including This One');
    assert.equal(makeTitle('Me and my wife lived happily for twenty years and then we met.'), 'Me And My Wife Lived Happily For Twenty Years And Then We Met.');
    assert.equal(makeTitle('There are no stupid questions, just stupid people.'), 'There Are No Stupid Questions, Just Stupid People.');
    assert.equal(makeTitle('1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d'), '1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d');
    assert.equal(makeTitle('PIZZA PIZZA PIZZA'), 'PIZZA PIZZA PIZZA');
  });

  it('doubleLetters', () => {
    // True test cases
    assert.equal(doubleLetters('loop'), true);
    assert.equal(doubleLetters('meeting'), true);
    assert.equal(doubleLetters('yummy'), true);
    assert.equal(doubleLetters('moo'), true);
    assert.equal(doubleLetters('toodles'), true);
    assert.equal(doubleLetters('droop'), true);
    assert.equal(doubleLetters('loot'), true);
    // False test cases
    assert.equal(doubleLetters('orange'), false);
    assert.equal(doubleLetters('munchkin'), false);
    assert.equal(doubleLetters('forestry'), false);
    assert.equal(doubleLetters('raindrops'), false);
    assert.equal(doubleLetters('gold'), false);
    assert.equal(doubleLetters('paradise'), false);
    assert.equal(doubleLetters('chicken'), false);
  });

  it('neutralise', () => {
    assert.equal(neutralise('--++--', '++--++'), '000000');
    assert.equal(neutralise('-+-+-+', '-+-+-+'), '-+-+-+');
    assert.equal(neutralise('-++-', '-+-+'), '-+00');
    assert.equal(neutralise('--++', '++++'), '00++');
    assert.equal(neutralise('+++--+---', '++----++-'), '++0--000-');
    assert.equal(neutralise('-----', '-----'), '-----');
    assert.equal(neutralise('-+', '++'), '0+');
    assert.equal(neutralise('--', '-+'), '-0');
    assert.equal(neutralise('-++', '+--'), '000');
    assert.equal(neutralise('++-++--++-', '-+++-++-++'), '0+0+0000+0');
    assert.equal(neutralise('-++-+-++-', '+-++++---'), '00+0+000-');
    assert.equal(neutralise('---++-+--', '-+++--++-'), '-00+0-+0-');
    assert.equal(neutralise('+-----+++-', '--+-+-++--'), '0-0-0-++0-');
    assert.equal(neutralise('+-----+-', '---++-++'), '0--00-+0');
    assert.equal(neutralise('-+--+-+---', '-+--+-+-+-'), '-+--+-+-0-');
    assert.equal(neutralise('+-+', '-++'), '00+');
    assert.equal(neutralise('-++', '-+-'), '-+0');
    assert.equal(neutralise('---+', '-+++'), '-00+');
    assert.equal(neutralise('+--', '+--'), '+--');
    assert.equal(neutralise('--+++-+-', '+++++---'), '00+++-0-');
  });

  it('mumbling', () => {
    assert.equal(mumbling('MubAshIr'), 'M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr');
    assert.equal(mumbling('maTT'), 'M-Aa-Ttt-Tttt');
    assert.equal(mumbling('airForce'), 'A-Ii-Rrr-Ffff-Ooooo-Rrrrrr-Ccccccc-Eeeeeeee');
    assert.equal(mumbling('EdaBit'), 'E-Dd-Aaa-Bbbb-Iiiii-Tttttt');
    assert.equal(mumbling('PaKiStAn'), 'P-Aa-Kkk-Iiii-Sssss-Tttttt-Aaaaaaa-Nnnnnnnn');
  });
});
