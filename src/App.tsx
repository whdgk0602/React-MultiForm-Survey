import './App.css'
import Dropdown from './components/common/Dropdown'
import MainLayout from './components/common/MainLayout'
import Panel, { PanelBody, PanelCap, PanelFooter, PanelHeader } from './components/common/Panel'
import Tabs, { Tab, TabList, TabPanel, TabPanels } from './components/common/Tabs'
import QuestionEditor from './components/Edit/QuestionEditor'

function App() {


  return (
    <>
      <MainLayout>
				<Tabs>
					<TabList>
						<Tab index={0}>
							tab1
						</Tab>
						<Tab index={1}>
							tab2
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel index={0}>
							{/* <PanelCap>cap</PanelCap>
							<Panel>
								<PanelHeader>header
									<Dropdown options={[
										{label : <div>1</div>,value: `1`},
										{label : <div>2</div>,value: `2`},
										{label : <div>3</div>,value: `3`},
										]}
									/>
								</PanelHeader>
								<PanelBody>body</PanelBody>
								<PanelFooter>footer</PanelFooter>
							</Panel> */}
							<QuestionEditor />
						</TabPanel>
						<TabPanel index={1}>
							panel2
						</TabPanel>
					</TabPanels>
				</Tabs>
			</MainLayout>
    </>
  )
}

export default App
