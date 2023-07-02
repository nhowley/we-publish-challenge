import React, { useState, useEffect } from 'react'
import { DatePicker, ConfigProvider } from 'antd'
import Categories from '../../categories.json'
import { CategoryGrid } from '../CategoryGrid'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { formatDate } from '../../utils/dates'
import { StyledContent, StyledBreadcrumb, StyledFilterLabel, StyledFiltersContainer, StyledSearch } from './CategoriesContainer.styled'

const CategoriesContainer: React.FC = () => {
  const [filteredCategories, setFilteredCategories] = useState(Categories)
  const [filteredCategoriesDate, setFilteredCategoriesDate] = useState(Categories)
  const [filteredCategoriesSearch, setFilteredCategoriesSearch] = useState(Categories)
  const [date, setDate] = useState(undefined)
  dayjs.extend(isBetween)

  const filterCategoriesDate = (date: any): void => {
    const filteredCategories = Categories.filter(({ activeFrom, activeUntil }) => {
      const yearSelected = date !== undefined ? dayjs(date).get('year') : undefined
      const formattedActiveFrom = formatDate(activeFrom, yearSelected)
      const formattedActiveUntil = formatDate(activeUntil, yearSelected)
      // if activeFrom is after activeUntil, modify year so the date range is correct
      const isActiveFromAfterActiveUntil = formattedActiveFrom !== undefined && formattedActiveUntil !== undefined && formattedActiveFrom > formattedActiveUntil
      const activeFromNew = isActiveFromAfterActiveUntil ? dayjs(formattedActiveFrom).subtract(1, 'year') : formattedActiveFrom
      const isInActiveRange = dayjs(date).isBetween(activeFromNew, formattedActiveUntil, 'day', '[]')
      return activeUntil === null || isInActiveRange
    })
    setFilteredCategoriesDate(filteredCategories)
  }

  const onChangeDate = (date: any): void => {
    const dateSelected = date !== null ? date.$d : undefined
    setDate(dateSelected)
    filterCategoriesDate(dateSelected)
  }

  const onSearch = (value: string): void => {
    const searchResults = Categories.filter(({ name }) => {
      return name.toLowerCase().includes(value.toLowerCase())
    })
    setFilteredCategoriesSearch(searchResults)
  }

  const filterCategories = (): void => {
    const filteredArray = filteredCategoriesDate.filter(value => filteredCategoriesSearch.includes(value))
    setFilteredCategories(filteredArray)
  }

  useEffect(() => {
    filterCategories()
  }, [filteredCategoriesDate, filteredCategoriesSearch])

  return (
      <StyledContent>
          <StyledBreadcrumb items={[{ title: 'Admin' }, { title: 'Categories' }]} />
          <StyledFiltersContainer>
              <ConfigProvider theme={{ token: { colorPrimary: '#F3C13A' } }}>
                <StyledSearch
                  placeholder="Search categories"
                  allowClear
                  onSearch={onSearch} />
                <StyledFilterLabel>Active On:</StyledFilterLabel>
                <DatePicker onChange={onChangeDate} defaultValue={date} format="DD-MM-YYYY" />
              </ConfigProvider>
          </StyledFiltersContainer>
        <CategoryGrid categories={filteredCategories}/>
      </StyledContent>
  )
}

export default CategoriesContainer
