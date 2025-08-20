import './App.css'
import MainLayout from './components/common/MainLayout'
import Tabs, { Tab, TabList, Tabpanel, TabPanels } from './components/common/Tabs'

function App() {


  return (
    <>
      <MainLayout><Tabs>
				<TabList>
					<Tab index={0}>
						tab1
					</Tab>
					<Tab index={1}>
						tab2
					</Tab>
				</TabList>
				<TabPanels>
					<Tabpanel index={0}>
						panel1
					</Tabpanel>
					<Tabpanel index={1}>
						panel2
					</Tabpanel>
				</TabPanels>
			</Tabs></MainLayout>
    </>
  )
}

export default App
