export const RevenueCard = ({
    title,
    showWarning,
    orderCount,
    amount
}) => {
    return <div className="bg-white rounded shadow-sm">
        <div>
            {title}
            ?
        </div>
        <div className="flex justify-between">
            <div>
                Rs {amount}
            </div>
            {orderCount ? <div>
                {count} order(s) {'>'}
            </div>}
        </div>

    </div>
}