import { Button } from "../components/Button"
import { Input } from "../components/Input"

export function Signup() {
    return <div className="h-screen w-screen bg-grey-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input placeholder="Username"></Input>
            <Input placeholder="Password"></Input>
            <div className="flex justify-center pt-4">
                <Button varient="primary" text="Signup" size="md" />
            </div>
            
        </div>
    </div>
}