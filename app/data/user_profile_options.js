import _ from 'lodash'

// populate school year options
const maxSchoolYear = 2019
const minSchoolYear = 1999
const yearArr = _.range(minSchoolYear, maxSchoolYear)
const yearOptions = yearArr.map(year => ({
  key: year,
  text: `${year} 级`,
  value: year,
}))

// only one school to choose for now #_#
const schoolOptions = [{
  key: '西南交通大学',
  text: '西南交通大学',
  value: 1,
}]

module.exports = {
  year: yearOptions,
  school: schoolOptions,
}
