import '../App.css'
import { Button } from '../components/Button'
import { Card } from '../components/card'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { CreateContentModal } from '../components/createContent'
import { useState } from 'react'
import { Sidebar } from '../components/sidebar'

export function Dashboard() {
    
    const [modalOpen, setModalOpen] = useState(false);
    return <div p-4>
        <div>
            <Sidebar />
        </div>
        <div className='ml-72 p-4 min-h-screen bg-grey-100'>
            <CreateContentModal open = {modalOpen} onClose = {() => {
                setModalOpen(false)
            }}></CreateContentModal>
            <div className='flex justify-end gap-4'>
                <Button startIcon={<ShareIcon size = 'md'/>} size = 'md' varient='primary' text= "share"></Button>
                <Button onClick = {() =>
                    setModalOpen(true)
                } size = 'md' varient='secondary' text= "Add Content"></Button>
            </div>
            <div className='flex gap-4'>
                <Card type="youtube" link="https://www.youtube.com/watch?v=b68HETiNO98&list=RDb68HETiNO98&start_radio=1" title= "sai abhanynkar"/>
                <Card type="twitter" link = "https://x.com/narendramodi/status/2071992136619442579" title="MODI"></Card>
            </div>
        </div>
    </div>
}   


