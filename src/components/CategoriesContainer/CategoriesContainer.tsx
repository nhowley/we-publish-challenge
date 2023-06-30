/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { Breadcrumb, DatePicker, Layout, Typography } from 'antd'
import Categories from '../../categories.json'
import { CategoryGrid } from '../CategoryGrid'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { formatDate } from '../../utils/dates'

const { Content } = Layout

const CategoriesContainer: React.FC = () => {
  const [filteredCategories, setFilteredCategories] = useState(Categories)
  const [date, setDate] = useState(undefined)
  dayjs.extend(isBetween)

  const filterCategoriesDate = (date: any): any => {
    const filteredCategories = Categories.filter(({ activeFrom, activeUntil }) => {
      const yearSelected = date !== undefined ? dayjs(date).get('year') : undefined
      const formattedActiveFrom = formatDate(activeFrom, yearSelected)
      const formattedActiveUntil = formatDate(activeUntil, yearSelected)
      const isInActiveRange = dayjs(date).isBetween(formattedActiveFrom, formattedActiveUntil, 'day', '[]')
      return activeUntil === null || isInActiveRange
    })
    setFilteredCategories(filteredCategories)
  }

  const onChangeDate = (date: any): any => {
    setDate(date?.$d)
    filterCategoriesDate(date?.$d)
    console.log('date', date.$d)
  }

  return (
      <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Categories</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Typography>Active On:</Typography>
            <DatePicker onChange={onChangeDate} defaultValue={date}/>
          </div>
        <CategoryGrid categories={filteredCategories}/>
      </Content>
  )
}

export default CategoriesContainer
