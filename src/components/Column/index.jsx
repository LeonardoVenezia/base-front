import Card from "../Card";
import CreateCard from "../CreateCard";

const Column = ({ title, color, cards })=> {
    return (
        <div className={`w-full h-auto ${color} glass p-2 rounded-md`}>
            <div className={`w-full ${color} p-2 text-center rounded mb-4`}>
                <p>{title}</p>
            </div>
            {
                cards.map((card, index) => <Card {...card} color={color} key={index} />)
            }
            <CreateCard />
        </div>
    );
}

export default Column;
