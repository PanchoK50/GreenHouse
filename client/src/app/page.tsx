import EnergyChart from "./EnergyChart";
import Card from "@/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  function generateRandomValue(baseValue: number, deviation: number) {

    return (
      baseValue + Math.floor(Math.random() * (2 * deviation + 1)) - deviation
    );
  }

  var defaultData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        // data: [12, 19, 15, 16, 20, 13, 17],
        data: Array.from({ length: 7 }, () => generateRandomValue(15, 4.67)),
        borderWidth: 3,
        borderColor: "#18ad3b",
      },
    ],
  };

  function calculateTotalKWh(data: ChartData): number {
    return data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
  }

  const totalKWh: number = calculateTotalKWh(defaultData);
  interface ChartData {
    labels: string[];
    datasets: {
      data: number[];
      borderWidth: number;
      borderColor: string;
    }[];
  }

  return (
    <>
        <EnergyChart data={defaultData} />

        <Card style={{ marginTop: "1rem" }}>
            <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem" }}>{totalKWh.toFixed(1)} kWh</h1>
                    <h3 className="altText" style={{ marginTop: ".5rem" }}>{generateRandomValue(25, 2.34).toFixed(1)}% less than last week</h3>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <FontAwesomeIcon icon={faDownLong} style={{ fontSize: "3rem", color: "#037244" }} />
                </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon
                icon={faDownLong}
                style={{ fontSize: "3rem", color: "green" }}
              />
            </div>
        </Card>

        <Card style={{ marginTop: "2rem", padding: "0.5rem 2rem", animationDelay: ".3s" }}>
            <h1>Tip of the day:</h1>
            <div className="inline" style={{ alignItems: "stretch", marginTop: "1rem" }}>
                <img src="/tree.svg" alt="Tree" style={{ width: "6rem" }} />
                <div style={{height: "100%"}} >
                    <h2>Hello World!</h2>
                </div>
            </div>
        </Card>
    </>
  );
}
