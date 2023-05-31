import './card.styles.css';

const cards = [
    {
        id : 1,
        task : 'Total Revenues',
        amount : 2129430
    },
    {
        id : 2,
        task : 'Total Transactions',
        amount : 1520
    },
    {
        id : 3,
        task : 'Total Likes',
        amount : 9721
    },
    {
        id : 4,
        task : 'Total Users',
        amount : 892
    }
]
const Card = (props) => {
    
    return (
        <div className="card-list">
           {cards.map((card) => {
                return (
                    <div key={card.id} className="card">
                        <div>{card.task}</div>
                        <div>
                            <span>{card.amount}</span>
                        </div>
                    </div>
                )
            })}     
        </div>
    )
}

export default Card;