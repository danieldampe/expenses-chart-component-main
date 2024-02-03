import ExpensesChart from "./components/ExpensesChart.js";
import ajax from "./helpers/ajax.js";

// *** *** *** Variables *** *** ***
const $main = document.getElementById("main");

// *** *** *** Execution *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    ajax({
        url: "./data.json",
        sucess: data => {
            $main.append(
                ExpensesChart(data)
            );
        }
    });
});
