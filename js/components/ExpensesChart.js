import ExpensesChartBar from "./ExpensesChartBar.js";

export default function ExpensesChart(arr) {  
    // *** *** *** Variables *** *** ***
    const $template = document.getElementById("expenses-chart").content,
        $clone = document.importNode($template, true),
        $chart = $clone.querySelector("[data-chart]"),
        $fragment = document.createDocumentFragment();
    
    // *** *** *** Execution *** *** ***
    arr.forEach(elm => 
        (elm.amount === Math.max(...arr.map(x => x.amount))) 
            ? $fragment.append(ExpensesChartBar(elm, true))
            : $fragment.append(ExpensesChartBar(elm))
    );
    $chart.append($fragment);
    return $clone;
};
