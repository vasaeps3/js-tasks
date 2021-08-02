const assert = require('assert');
const {
  days,
  hasFriday13,
  convertDate,
  palindromicDate,
  daysUntil2021,
  threeDaysAgo,
  formatDate,
  weekAfter,
  convertTime,
  dayOfYear
} = require('../tasks/04-dates');

describe('04-dates.test', () => {
  it('days', () => {
    assert.equal(days(1, 2018), 31, 'Should show the correct day amount for January');
    assert.equal(days(2, 2018), 28, 'Should show the correct day amount for February on a non-leap year');
    assert.equal(days(3, 2018), 31, 'Should show the correct day amount for March');
    assert.equal(days(4, 2018), 30, 'Should show the correct day amount for April');
    assert.equal(days(5, 2018), 31, 'Should show the correct day amount for May');
    assert.equal(days(6, 2018), 30, 'Should show the correct day amount for June');
    assert.equal(days(7, 2018), 31, 'Should show the correct day amount for July');
    assert.equal(days(8, 2018), 31, 'Should show the correct day amount for August');
    assert.equal(days(9, 2018), 30, 'Should show the correct day amount for September');
    assert.equal(days(10, 2018), 31, 'Should show the correct day amount for October');
    assert.equal(days(11, 2018), 30, 'Should show the correct day amount for November');
    assert.equal(days(12, 2018), 31, 'Should show the correct day amount for December');
    assert.equal(days(2, 2004), 29, 'Should show the correct day amount for February on a leap year that is divisible by 4 but not 100');
    assert.equal(days(2, 1800), 28, 'Should show the correct day amount for February on a leap year that is divisible by 100 but not 400 ');
    assert.equal(days(2, 1600), 29, 'Should show the correct day amount for February on a leap year that is divisible by 100 and 400');
  });

  it('hasFriday13', () => {
    assert.equal(hasFriday13(3, 2020), true);
    assert.equal(hasFriday13(10, 2017), true);
    assert.equal(hasFriday13(1, 1985), false);
    assert.equal(hasFriday13(5, 1619), false);
    assert.equal(hasFriday13(6, 1614), true);
    assert.equal(hasFriday13(8, 1767), false);
    assert.equal(hasFriday13(6, 1589), false);
    assert.equal(hasFriday13(2, 2015), true);
    assert.equal(hasFriday13(3, 2015), true);
    assert.equal(hasFriday13(11, 2015), true);
    assert.equal(hasFriday13(2, 1759), false);
    assert.equal(hasFriday13(8, 1612), false);
    assert.equal(hasFriday13(8, 1612), false);
    assert.equal(hasFriday13(10, 2029), false);
    assert.equal(hasFriday13(1, 1590), false);
    assert.equal(hasFriday13(7, 1812), false);
    assert.equal(hasFriday13(1, 1785), false);
    assert.equal(hasFriday13(11, 1961), false);
    assert.equal(hasFriday13(9, 1706), false);
    assert.equal(hasFriday13(5, 2016), true);
    assert.equal(hasFriday13(11, 2020), true);
    assert.equal(hasFriday13(1, 2023), true);
    assert.equal(hasFriday13(10, 2023), true);
    assert.equal(hasFriday13(2, 2043), true);
    assert.equal(hasFriday13(4, 2043), false);
    assert.equal(hasFriday13(3, 2043), true);
    assert.equal(hasFriday13(11, 2043), true);
  });

  it('convertDate', () => {
    assert.deepEqual(convertDate('January 9, 2019'), [1, 9, 2019]);
    assert.deepEqual(convertDate('Jan 9, 2019'), [1, 9, 2019]);
    assert.deepEqual(convertDate('01/09/2019'), [1, 9, 2019]);
    assert.deepEqual(convertDate('01-09-2019'), [1, 9, 2019]);
    assert.deepEqual(convertDate('01.09.2019'), [1, 9, 2019]);
    assert.deepEqual(convertDate('March 3, 1901'), [3, 3, 1901]);
    assert.deepEqual(convertDate('Mar 3, 1901'), [3, 3, 1901]);
    assert.deepEqual(convertDate('03/03/1901'), [3, 3, 1901]);
    assert.deepEqual(convertDate('03-03-1901'), [3, 3, 1901]);
    assert.deepEqual(convertDate('03.03.1901'), [3, 3, 1901]);
    assert.deepEqual(convertDate('August 8, 1666'), [8, 8, 1666]);
    assert.deepEqual(convertDate('Nov 13, 1533'), [11, 13, 1533]);
    assert.deepEqual(convertDate('04/15/1789'), [4, 15, 1789]);
    assert.deepEqual(convertDate('12-23-1111'), [12, 23, 1111]);
    assert.deepEqual(convertDate('02.28.1832'), [2, 28, 1832]);
  });

  it('palindromicDate', () => {
    assert.equal(palindromicDate('02/02/2020'), true);
    assert.equal(palindromicDate('11/12/2019'), false);
    assert.equal(palindromicDate('11/02/2011'), false);
    assert.equal(palindromicDate('06/10/1469'), false);
    assert.equal(palindromicDate('06/05/3133'), false);
    assert.equal(palindromicDate('12/12/2121'), true);
    assert.equal(palindromicDate('09/09/9090'), true);
    assert.equal(palindromicDate('11/04/2203'), false);
    assert.equal(palindromicDate('07/07/7070'), true);
    assert.equal(palindromicDate('06/11/2923'), false);
    assert.equal(palindromicDate('03/08/8030'), false);
    assert.equal(palindromicDate('01/01/1010'), true);
    assert.equal(palindromicDate('03/11/3369'), false);
    assert.equal(palindromicDate('11/03/2775'), false);
    assert.equal(palindromicDate('03/03/1822'), false);
  });

  it('daysUntil2021', () => {
    assert.equal(daysUntil2021('12/29/2020'), '3 days');
    assert.equal(daysUntil2021('1/1/2020'), '366 days');
    assert.equal(daysUntil2021('2/28/2020'), '308 days');
    assert.equal(daysUntil2021('6/30/2020'), '185 days');
    assert.equal(daysUntil2021('10/22/2020'), '71 days');
    assert.equal(daysUntil2021('12/31/2020'), '1 day');
  });

  it('threeDaysAgo', () => {
    assert.deepEqual(threeDaysAgo(new Date(2017, 1, 1)), '2017-01-29');
    assert.deepEqual(threeDaysAgo(new Date(1950, 6, 8)), '1950-07-05');
    assert.deepEqual(threeDaysAgo(new Date(1965, 3, 15)), '1965-04-12');
    assert.deepEqual(threeDaysAgo(new Date(2025, 4, 24)), '2025-05-21');
    assert.deepEqual(threeDaysAgo(new Date(1965, 3, 15)), '1965-04-12');
    assert.deepEqual(threeDaysAgo(new Date(2015, 5, 17)), '2015-06-14');
  });

  it('formatDate', () => {
    assert.equal(formatDate(new Date(2020, 6, 4, 8, 0, 0)), '20200704080000');
    assert.equal(formatDate(new Date(2019, 11, 31, 23, 59, 59)), '20191231235959');
    assert.equal(formatDate(new Date(1970, 0, 1, 00, 00, 00)), '19700101000000');
    assert.equal(formatDate(new Date(2020, 6, 4)), '20200704000000');
  });

  it('weekAfter', () => {
    assert.equal(weekAfter('12/03/2020'), '19/03/2020');
    assert.equal(weekAfter('21/12/1989'), '28/12/1989');
    assert.equal(weekAfter('01/01/2000'), '08/01/2000');
    assert.equal(weekAfter('24/09/1924'), '01/10/1924');
    assert.equal(weekAfter('21/07/1964'), '28/07/1964');
    assert.equal(weekAfter('14/07/2085'), '21/07/2085');
    assert.equal(weekAfter('25/04/1953'), '02/05/1953');
    assert.equal(weekAfter('02/01/2200'), '09/01/2200');
    assert.equal(weekAfter('06/01/2007'), '13/01/2007');
    assert.equal(weekAfter('07/04/2195'), '14/04/2195');
    assert.equal(weekAfter('04/09/2094'), '11/09/2094');
    assert.equal(weekAfter('20/08/1910'), '27/08/1910');
    assert.equal(weekAfter('12/12/1894'), '19/12/1894');
    assert.equal(weekAfter('02/11/2094'), '09/11/2094');
    assert.equal(weekAfter('22/12/1955'), '29/12/1955');
    assert.equal(weekAfter('18/04/1859'), '25/04/1859');
    assert.equal(weekAfter('17/03/1847'), '24/03/1847');
    assert.equal(weekAfter('17/03/2142'), '24/03/2142');
    assert.equal(weekAfter('26/01/2145'), '02/02/2145');
    assert.equal(weekAfter('03/12/1959'), '10/12/1959');
    assert.equal(weekAfter('01/06/1947'), '08/06/1947');
    assert.equal(weekAfter('26/12/1853'), '02/01/1854');
    assert.equal(weekAfter('27/10/2068'), '03/11/2068');
    assert.equal(weekAfter('05/05/2080'), '12/05/2080');
    assert.equal(weekAfter('22/12/2144'), '29/12/2144');
    assert.equal(weekAfter('12/05/1870'), '19/05/1870');
    assert.equal(weekAfter('07/01/1882'), '14/01/1882');
    assert.equal(weekAfter('16/06/2032'), '23/06/2032');
    assert.equal(weekAfter('02/10/2007'), '09/10/2007');
    assert.equal(weekAfter('24/03/1871'), '31/03/1871');
    assert.equal(weekAfter('19/08/1847'), '26/08/1847');
    assert.equal(weekAfter('24/07/2157'), '31/07/2157');
    assert.equal(weekAfter('28/12/1848'), '04/01/1849');
    assert.equal(weekAfter('20/07/1951'), '27/07/1951');
    assert.equal(weekAfter('14/11/2071'), '21/11/2071');
    assert.equal(weekAfter('07/12/2170'), '14/12/2170');
    assert.equal(weekAfter('01/03/2080'), '08/03/2080');
    assert.equal(weekAfter('28/04/1906'), '05/05/1906');
    assert.equal(weekAfter('15/06/2023'), '22/06/2023');
    assert.equal(weekAfter('11/08/1950'), '18/08/1950');
    assert.equal(weekAfter('15/11/2103'), '22/11/2103');
    assert.equal(weekAfter('23/11/1852'), '30/11/1852');
    assert.equal(weekAfter('08/01/1928'), '15/01/1928');
    assert.equal(weekAfter('14/11/2118'), '21/11/2118');
    assert.equal(weekAfter('11/10/2096'), '18/10/2096');
    assert.equal(weekAfter('02/12/1816'), '09/12/1816');
    assert.equal(weekAfter('10/10/1937'), '17/10/1937');
    assert.equal(weekAfter('28/11/1959'), '05/12/1959');
    assert.equal(weekAfter('27/05/2133'), '03/06/2133');
    assert.equal(weekAfter('28/04/1932'), '05/05/1932');
    assert.equal(weekAfter('23/02/2050'), '02/03/2050');
    assert.equal(weekAfter('23/05/2146'), '30/05/2146');
    assert.equal(weekAfter('24/07/2167'), '31/07/2167');
  });

  it('convertTime', () => {
    assert.equal(convertTime('12:00 am'), '0:00');
    assert.equal(convertTime('6:20 pm'), '18:20');
    assert.equal(convertTime('21:00'), '9:00 pm');
    assert.equal(convertTime('5:05'), '5:05 am');
  });

  it('dayOfYear', () => {
    assert.equal(dayOfYear('12/13/2020'), 348);
    assert.equal(dayOfYear('12/17/2020'), 352);
    assert.equal(dayOfYear('11/16/2020'), 321);
    assert.equal(dayOfYear('1/9/2019'), 9);
    assert.equal(dayOfYear('3/1/2004'), 61);
    assert.equal(dayOfYear('12/31/2000'), 366);

    const testDates = [
      ['7/25/2015', 206], ['10/15/1985', 288], ['2/29/1904', 60],
      ['8/29/1900', 241], ['10/7/2050', 280], ['4/1/3024', 92],
      ['2/29/1600', 60], ['3/31/1999', 90], ['5/3/0002', 123],
      ['9/11/2001', 254], ['7/1/9996', 183], ['11/3/2020', 308]
    ];
    for (const [ac, ex] of testDates) assert.deepEqual(dayOfYear(ac), ex);
  });
});
