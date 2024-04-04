// Get the slider input and tooltip elements
const slider = d3.select("#slider");
const tooltip = d3.select("#value-tooltip");

// Function to update the tooltip value and position
function updateTooltip() {
    const value = slider.property("value");
    tooltip.text(mapNumberToDateString(value));
}

// Initial update of the tooltip
updateTooltip();

// Add event listener for slider input
slider.on("input", updateTooltip);
function mapNumberToDateString(number) {
    if (number < 0 || number > 47) {
        return "输入数字应在0到71之间";
    }

    // 计算年份和月份
    const year = Math.floor(number / 12) + 2020;
    const month = (number % 12) + 1;

    // 构建日期字符串
    const dateString = year + '-' + (month < 10 ? '0' : '') + month;

    return dateString;
}
