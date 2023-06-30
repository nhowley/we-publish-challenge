import React, { useState } from 'react'
import { DatePicker } from 'antd'
import Categories from '../../categories.json'
import { CategoryGrid } from '../CategoryGrid'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { formatDate } from '../../utils/dates'
import { StyledContent, StyledBreadcrumb, StyledFilterLabel, StyledFiltersContainer } from './CategoriesContainer.styled'

const CategoriesContainer: React.FC = () => {
  const [filteredCategories, setFilteredCategories] = useState(Categories)
  const [date, setDate] = useState(undefined)
  dayjs.extend(isBetween)

  const filterCategoriesDate = (date: any): void => {
    const filteredCategories = Categories.filter(({ activeFrom, activeUntil }) => {
      const yearSelected = date !== undefined ? dayjs(date).get('year') : undefined
      const formattedActiveFrom = formatDate(activeFrom, yearSelected)
      const formattedActiveUntil = formatDate(activeUntil, yearSelected)
      // if activeFrom is after activeUntil, modify year so the date range is correct
      const activeFromNew = formattedActiveFrom !== undefined && formattedActiveUntil !== undefined && formattedActiveFrom > formattedActiveUntil ? dayjs(formattedActiveFrom).subtract(1, 'year') : formattedActiveFrom
      const isInActiveRange = dayjs(date).isBetween(activeFromNew, formattedActiveUntil, 'day', '[]')
      return activeUntil === null || isInActiveRange
    })
    setFilteredCategories(filteredCategories)
  }

  const onChangeDate = (date: any): void => {
    const dateSelected = date !== null ? date.$d : undefined
    setDate(dateSelected)
    filterCategoriesDate(dateSelected)
  }

  return (
      <StyledContent>
          <StyledBreadcrumb items={[{ title: 'Admin' }, { title: 'Categories' }]} />
          <StyledFiltersContainer>
            <StyledFilterLabel>Active On:</StyledFilterLabel>
            <DatePicker onChange={onChangeDate} defaultValue={date}/>
          </StyledFiltersContainer>
        <CategoryGrid categories={filteredCategories}/>
      </StyledContent>
  )
}

export default CategoriesContainer
