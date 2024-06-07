import React, { useEffect } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { ContentWrapper, MainWrapper } from '../../global_styles/styles'
import { Paper } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { getUserInfo } from './requests'
import { setUser } from '../../redux/action/userActions'
import { useDispatch } from 'react-redux'

export default function Main() {

  const dispatch = useDispatch()

  useEffect(() => {
    getUserInfo(data => {
      // console.log(data)
      dispatch(setUser(data))
    }, error => {
      console.log(error)
    })
  }, [])

  return (
    <div>
        <Header/>
        <Sidebar/>
        <MainWrapper>
          <ContentWrapper>
            <Paper
              elevation={0}
              sx={{
                  width: '100%',
                  padding: "20px",
                  borderRadius: "10px",
              }}
            >
              <Outlet/>
            </Paper>
          </ContentWrapper>
        </MainWrapper>
    </div>
  )
}
