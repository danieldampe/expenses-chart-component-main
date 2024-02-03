export default function ExpensesChartBar(obj, bool = false) {
    // *** *** *** Variables *** *** ***
    const $template = document.getElementById("expenses-chart-bar").content,
        $clone = document.importNode($template, true),
        $num = $clone.querySelector("[data-num]"),
        $bar = $clone.querySelector("[data-bar]"),
        $day = $clone.querySelector("[data-day]");
    // *** *** *** Execution *** *** ***
    $num.textContent = "$" + obj.amount;
    $bar.style.height = 3 * obj.amount + "px";
    if (bool) $bar.classList.add("is-active");
    $day.textContent = obj.day;
    return $clone;
};
