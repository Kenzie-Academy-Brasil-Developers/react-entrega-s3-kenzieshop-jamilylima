const formatValue = (value) =>
    Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL",
    }).format(value)

    export default formatValue