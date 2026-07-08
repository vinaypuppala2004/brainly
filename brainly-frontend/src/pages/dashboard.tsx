import '../App.css'
import { Button } from '../components/Button'
import { Card } from '../components/card'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { CreateContentModal } from '../components/createContent'
import { useState } from 'react'
import { Sidebar } from '../components/sidebar'
import { useContent } from '../hooks/useContent'

export function Dashboard() {
    
    const [modalOpen, setModalOpen] = useState(false);
    const contents = useContent();
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
           <div className="columns-1 md:columns-2 lg:columns-3 gap-6 p-6">
                {contents.map(({_id, type, link, title, tags}) =>
                    <div key={_id} className="break-inside-avoid mb-6">
                        <Card
                            type={type}
                            link={link}
                            title={title}
                            tags={tags}
                        />
                    </div>
                )}
            </div>
        </div>
    </div>
}   


