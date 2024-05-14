import Container from '@/components/UI-Kit/Container'
import React from 'react'
import Tabbar from './Tabbar'
import General from './Content/General'
import styled from './styled.module.scss'
import TabsContent from './Tabs.Content'
import SwitchApperance from './Content/SwitchApperance'

const EditProfileRoot: React.FC = () => {
  const [value, setValue] = React.useState(0)
  const handleChange = (event:React.SyntheticEvent, newValue:number) => {
    setValue(newValue)
  }

  return (
   <section>
     <Container>
        <Tabbar onChange={handleChange} value={value} />
        <div className={styled.wrapper}>
          <TabsContent value={value} index={0}>
            <General />
          </TabsContent>
          <TabsContent
            value={value}
            index={1}
          >
            <SwitchApperance />
          </TabsContent>
          <TabsContent
            value={value}
            index={2}
          >
            Vue JS
          </TabsContent>
        </div>
      </Container>
   </section>
  )
}

export default EditProfileRoot