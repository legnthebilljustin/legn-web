import { Card, CardBody } from "@nextui-org/react"
import { Link } from "react-router-dom"

type Screen = {
    path: string
    name: string
}

export default function Dashboard() {
    const screens:Screen[] = [
        {
            path: "/creditCards",
            name: "Credit Cards"
        },
        {
            path: "/crypto",
            name: "Crypto Tracker"
        }
    ]

    return (
        <div className="w-full px-4 flex justify-center">
            <div className="mt-8 max-w-lg text-center">
                <h1 className="text-lg mb-6 font-bold">Select Screen</h1>
                {screens.map((screen: Screen, index) => (
                    <Link key={index} to={screen.path}>
                        <Card fullWidth="false"
                            className="my-2 px-5 w-auto cursor-pointer"
                        >
                            <CardBody className="text-white text-center">
                                { screen.name }
                            </CardBody>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}