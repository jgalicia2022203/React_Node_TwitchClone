/* eslint-disable react/jsx-no-undef */
import { useEffect } from "react"
import { isLoadingSpinner as LoadingSpinner} from '../../components/LoadingSpinner'
import { Navbar } from "../../components/navbars/Navbar"
import { Content } from "../../components/dashboard/Content"
import { useChannels, useUserDetails } from "../../shared/hooks"
import './dashboardPage.css'
import { Sidebar } from '../../components/navbars/Sidebar'

export const DashboardPage = () => {
  const {getChannels, allChannels, isFetching, followedChannels} = useChannels()
  const { isLogged } = useUserDetails()

  useEffect(() => {
    getChannels(isLogged)
  }, [])

  if(isFetching){
    <LoadingSpinner/>
  }
  return (
    <div className="dashboard-container">
      <Navbar/>
      <Sidebar channels={followedChannels}/>
      <Content channels={allChannels || []} getChannels={getChannels}/>
    </div>
  )
}
