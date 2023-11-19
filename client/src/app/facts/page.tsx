import Card from "@/components/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownLong} from "@fortawesome/free-solid-svg-icons";

export default function Page() {
    return (
        <>
            <Card style={{ marginTop: "1rem" }}>
            <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem" }}>Lights out!</h1>
                    <h3 style={{ marginTop: ".5rem" }}>Most people leave their lights at home on, even if they&apos;re not currently in the room. Trying to 
                    turn of useless lights can spare someone 60 watts an hour with an old lightbulb and around 7 watts an hour with a LED lamp.</h3>
                </div>
            </div>
                </Card>

                <Card style={{ marginTop: "1rem" }}>
            <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem" }}>Electricity in CO2</h1>
                    <h3 style={{ marginTop: ".5rem" }}>In Germany, the average usage of a kilowatt hour results in the pollution of 420g of carbon dioxide.</h3>
                </div>
            </div>
                </Card>

                <Card style={{ marginTop: "1rem" }}>
            <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem" }}>LED superiority</h1>
                    <h3 style={{ marginTop: ".5rem" }}>LED lamps have gotten cheaper around the last years and bring a lot of advantages with them.
                    Compared to oldstyle lamps they can shine brighter and waste less energy. As a bonus, their lifespan is longer than that those of
                     old style lamps. A direct upgrade!</h3>
                </div>
            </div>
                </Card>
        </>
    );
}