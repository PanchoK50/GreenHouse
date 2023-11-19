import EnergyChart from "./EnergyChart";
import Card from "@/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faDownLong, faTshirt, faUpLong, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { info } from "console";

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
        data: Array.from({ length: 7 }, () => generateRandomValue(5, 1.67)),
        borderWidth: 3,
        borderColor: "#18ad3b",
      },
    ],
  };

  function calculateTotalKWh(data: ChartData): number {
    return data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
  }

  const totalKWh: number = calculateTotalKWh(defaultData);

  function calculateCoffeeCups(totalKWh: number): number {
    return totalKWh / 0.0142;
  }
  interface ChartData {
    labels: string[];
    datasets: {
      data: number[];
      borderWidth: number;
      borderColor: string;
    }[];
  }

  function getInfoText(index: number): string {
    const infoTexts = [
      "Cups of coffee!",
      "Running Washing machines!",
      "Meals for 4 persons!",
    ]
    return infoTexts[index%3];
  };

  function getNumberForInfo(index: number): string {
    const numbers = [
      calculateCoffeeCups(percentage).toFixed(0),
      percentage.toFixed(0),
      (percentage / 0.0142).toFixed(0),
    ]
    return numbers[index%3];
  };

  function getIconForInfo(index: number) {
    const icons = [
      faCoffee,
      faTshirt,
      faUtensils,
    ]
    const icon = icons[index%3];
    return <FontAwesomeIcon icon={icon} style={{ fontSize: "3rem", }} />;
  };

  const infoIndex = Math.floor(Math.random() * 3);

  const decideUpOrDown = () : boolean => {
    //70% down and 30% up
    const min = 1;
    const max = 10;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random <= 7;
  };

  const upOrDown = decideUpOrDown();
  const colorCode = upOrDown ? "#037244" : "#800437";
  const percentage = generateRandomValue(7, 2.23);

  return (
    <>
        <EnergyChart data={defaultData} />

        <Card style={{ marginTop: "1rem", padding: "0.75rem 1rem" }}>
            <div className="inline">
                <div>
                    <h1 className="textBig">{totalKWh.toFixed(1)} kWh</h1>
                    <h3 className="altText textMedium" style={{ marginTop: ".5rem" }}>{percentage.toFixed(1)}% {upOrDown ? "less" : "more"} than last week</h3>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "0 .5rem" }}>
                    <FontAwesomeIcon icon={upOrDown ? faDownLong : faUpLong} style={{ fontSize: "3rem", color: colorCode }} />
                </div>
            </div>
        </Card>

        <Card style={{ marginTop: "2rem", padding: "0.75rem 1rem", animationDelay: ".3s" }}>
          <div className="inline">
                <div>
                    <h1 className="textBig">{getNumberForInfo(infoIndex)}</h1>
                    <h3 className="altText textMedium" style={{ marginTop: ".5rem" }}>{getInfoText(infoIndex)}</h3>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "0 .5rem" }}>
                  {getIconForInfo(infoIndex)}
                </div>
          </div>
{/*             <div className="inline" style={{ alignItems: "stretch", marginTop: "1rem" }}>
                <img src="/tree.svg" alt="Tree" style={{ width: "6rem" }} />
                <div style={{height: "100%"}} >
                    <h2>Hello World!</h2>
                </div>
            </div> */}
        </Card>
    </>
  );
}
