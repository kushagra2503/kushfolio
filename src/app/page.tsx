import Banner from "@/components/PageComponent/Banner"
import { SwitchProvider } from "@/components/Context/SwitchContext"
import { ThemeProvider } from "@/components/Context/ThemeContext"
import IndexPage from "@/components/homeScreen/IndexPage"
import MainScreen from "@/layout/MainScreen"
import { TitleUpdater } from "@/utils/TitleUpdater"

const Home = () => {
  return (
    <ThemeProvider>
      <SwitchProvider>
        <TitleUpdater />
        <MainScreen>
          <Banner />
          <IndexPage />
        </MainScreen>
      </SwitchProvider>
    </ThemeProvider>
  )
}

export default Home;