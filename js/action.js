/** @format */

let whichShown = "time",
	circleHovered = false,
	event,
	element,
	isClicked = false;
$(function () {
	$(".baki-time").click(function () {
		$(this).parent().addClass("map-hide");
		$("#map-baki-time").addClass("map-baki-shown");
		$(".btn-back").addClass("btn-back-shown");
		$(".map-left .map-info").css({
			transform: "translateX(-90%) scale(.8)",
		});
		$(".map-right .map-info").css({
			transform: "translateX(90%) scale(.8)",
		});
	});

	$(".baki-percent").click(function () {
		$(this).parent().addClass("map-hide");
		$("#map-baki-percent").addClass("map-baki-shown");
		$(".btn-back").addClass("btn-back-shown");
		$(".map-left .map-info").css({
			transform: "translateX(-90%) scale(.8)",
		});
		$(".map-right .map-info").css({
			transform: "translateX(90%) scale(.8)",
		});
	});
	const TOOLTIP = $(".tooltip-float");
	const COUNTERS_BTN = $(".btn-counters");
	const DEPARTMENTS_BTN = $(".btn-department");
	$("body").on("mousemove", "#sgs-time", function (e) {
		console.log("isClicked", isClicked);
		if (isClicked) {
			return;
		}
		TOOLTIP.css({
			left: e.pageX,
			top: e.pageY < 230 ? 230 - 80 : e.pageY - 100,
		});
		COUNTERS_BTN.css({
			left: e.pageX - 90,
			top: e.pageY < 230 ? 230 - 10 : e.pageY - 40,
		});
		DEPARTMENTS_BTN.css({
			left: e.pageX + 20,
			top: e.pageY < 230 ? 230 - 10 : e.pageY - 40,
		});
		const checkHover =
			e.target.classList.contains("circle") ||
			e.target.classList.contains("baki");
		if (!checkHover) {
			TOOLTIP.removeClass("tooltip-float-shown");
		} else {
			TOOLTIP.addClass("tooltip-float-shown");
		}
	});
	$("body").on("mousemove", "#sgs-percent", function (e) {
		if (isClicked) {
			return;
		}
		TOOLTIP.css({
			left: e.pageX,
			top: e.pageY < 230 ? 230 - 80 : e.pageY - 100,
		});
		COUNTERS_BTN.css({
			left: e.pageX - 90,
			top: e.pageY < 230 ? 230 - 10 : e.pageY - 40,
		});
		DEPARTMENTS_BTN.css({
			left: e.pageX + 20,
			top: e.pageY < 230 ? 230 - 10 : e.pageY - 40,
		});
		const checkHover =
			e.target.classList.contains("circle") ||
			e.target.classList.contains("baki");
		if (!checkHover) {
			TOOLTIP.removeClass("tooltip-float-shown");
		} else {
			TOOLTIP.addClass("tooltip-float-shown");
		}
	});
	$("body").on("mousemove", "#map-baki-percent-svg", function (e) {
		if (isClicked) {
			return;
		}
		TOOLTIP.css({
			left: e.pageX,
			top: e.pageY < 230 ? 230 - 80 : e.pageY - 100,
		});
		COUNTERS_BTN.css({
			left: e.pageX - 90,
			top: e.pageY < 230 ? 230 - 10 : e.pageY - 40,
		});
		DEPARTMENTS_BTN.css({
			left: e.pageX + 20,
			top: e.pageY < 230 ? 230 - 10 : e.pageY - 40,
		});
		const checkHover = e.target.classList.contains("circle");
		if (!checkHover) {
			TOOLTIP.removeClass("tooltip-float-shown");
		} else {
			TOOLTIP.addClass("tooltip-float-shown");
		}
	});
	$("body").on("mousemove", "#map-baki-time-svg", function (e) {
		if (isClicked) {
			return;
		}
		TOOLTIP.css({
			left: e.pageX,
			top: e.pageY < 230 ? 230 - 80 : e.pageY - 100,
		});
		COUNTERS_BTN.css({
			left: e.pageX - 90,
			top: e.pageY < 230 ? 230 - 10 : e.pageY - 40,
		});
		DEPARTMENTS_BTN.css({
			left: e.pageX + 20,
			top: e.pageY < 230 ? 230 - 10 : e.pageY - 40,
		});
		const checkHover = e.target.classList.contains("circle");
		if (!checkHover) {
			TOOLTIP.removeClass("tooltip-float-shown");
		} else {
			TOOLTIP.addClass("tooltip-float-shown");
		}
	});

	let hoverTimer;
	function setHoverData(e) {
		if (circleHovered) {
			if (element == e) {
				hoverTimer = setTimeout(() => setHoverData(e), 3000);
			}
		}
	}

	const setPercentTooltipColor = (percent) => {
		if (percent <= 10) {
			TOOLTIP.css("background", "#5aaf2b");
		} else if (percent > 10 && percent <= 15) {
			TOOLTIP.css("background", "#f8c43d");
		} else if (percent > 15 && percent <= 20) {
			TOOLTIP.css("background", "#ef874c");
		} else if (percent > 20) {
			TOOLTIP.css("background", "#e43e3d");
		}
	};

	const setTImeTooltipColor = (time) => {
		if (time > 600 && time <= 900) {
			TOOLTIP.css("background", "#f8c43d");
		} else if (time > 900 && time <= 1200) {
			TOOLTIP.css("background", "#ef874c");
		} else if (time > 1200) {
			TOOLTIP.css("background", "#e43e3d");
		} else if (time < 600) {
			TOOLTIP.css("background", "#5aaf2b");
		}
	};

	$(".map-wrap").on("mouseover", ".circle", function (e) {
		if (isClicked) {
			return;
		}
		TOOLTIP.addClass("tooltip-float-shown");
		$("#tooltip-float-filname").text($(this).attr("data-filialname"));
		circleHovered = true;
		event = e.target;
		element = e.target;
		let circleType = event.getAttribute("data-type");

		if (circleType === "time") {
			const data = event.getAttribute("data-awg-text");
			document.getElementById("tooltip-float-percent").innerHTML = "";
			document.getElementById("tooltip-float-time").innerHTML = data;
			let time = data.split(":");
			let sec =
				parseInt(time[0] * 360) + parseInt(time[1] * 60) + parseInt(time[2]);
			setTImeTooltipColor(sec);
		} else {
			document.getElementById("tooltip-float-percent").innerHTML =
				event.getAttribute("data-percent-text") + " %";
			document.getElementById("tooltip-float-time").innerHTML = "";
			let percentTooltip = event.getAttribute("data-percent-text");
			percentTooltip = parseInt(percentTooltip);
			setPercentTooltipColor(percentTooltip);
		}

		hoverTimer = setTimeout(() => setHoverData(event), 1000);
	});
	$(".map-wrap").on("mouseover", ".baki", function (e) {
		if (isClicked) {
			return;
		}
		TOOLTIP.addClass("tooltip-float-shown");
		$("#tooltip-float-filname").text($(this).attr("data-filialname"));
		circleHovered = true;
		event = e.target;
		element = e.target;
		let circleType = event.getAttribute("data-type");
		let color = $(this).css("fill");
		console.log("color", color);
		TOOLTIP.css("background", color);
		if (whichShown === "time") {
			const data = event.getAttribute("data-awg-text");
			document.getElementById("tooltip-float-percent").innerHTML = "";
			document.getElementById("tooltip-float-time").innerHTML = data;
			let time = data.split(":");
			let sec =
				parseInt(time[0] * 360) + parseInt(time[1] * 60) + parseInt(time[2]);
		} else {
			let percent = event.getAttribute("data-percent-text");
			percent = percent !== null ? percent + "%" : "Data is calculate";
			document.getElementById("tooltip-float-percent").innerHTML = percent;
			document.getElementById("tooltip-float-time").innerHTML = "";
		}

		hoverTimer = setTimeout(() => setHoverData(event), 1000);
	});
	$(".map-wrap").on("mouseout", ".circle", function () {
		TOOLTIP.removeClass("tooltip-float-shown");
		clearTimeout(hoverTimer);
		circleHovered = false;
	});

	$(".btn-back").click(function () {
		if (whichShown == "time") {
			$("#sgs-time").removeClass("map-hide");
		} else {
			$("#sgs-percent").removeClass("map-hide");
		}
		$(".map-baki").removeClass("map-baki-shown");
		$(".btn-back").removeClass("btn-back-shown");
		$(".map-left .map-info").css({
			transform: "translateX(0) scale(1)",
		});
		$(".map-right .map-info").css({
			transform: "translateX(0) scale(1)",
		});
	});
	$("#tab-time").click(function () {
		$("#sgs-time").addClass("sgs-animation");
		$("#sgs-percent").addClass("sgs-animation");
		$(".tab-btn").removeClass("tab-btn__active");
		$(this).find(".tab-btn").addClass("tab-btn__active");
		$(".map-baki").removeClass("map-baki-shown");
		whichShown = "time";
		$("#map-percent").removeClass("d-flex");
		$("#map-percent").addClass("d-none");
		$("#map-time").addClass("d-flex");
		$("#map-time").removeClass("d-none");
		$("#sgs-time").removeClass("map-hide");
		$(".map-left .map-info").css({
			transform: "translateX(0) scale(1)",
		});
		$(".map-right .map-info").css({
			transform: "translateX(0) scale(1)",
		});
		$(".btn-back").removeClass("btn-back-shown");
	});
	$("#tab-percent").click(function () {
		$("#sgs-time").addClass("sgs-animation");
		$("#sgs-percent").addClass("sgs-animation");
		$(".tab-btn").removeClass("tab-btn__active");
		$(this).find(".tab-btn").addClass("tab-btn__active");
		$(".map-baki").removeClass("map-baki-shown");
		whichShown = "percent";
		$("#map-percent").addClass("d-flex");
		$("#map-percent").removeClass("d-none");
		$("#sgs-percent").removeClass("map-hide");
		$("#map-time").removeClass("d-flex");
		$("#map-time").addClass("d-none");
		$(".map-left .map-info").css({
			transform: "translateX(0) scale(1)",
		});
		$(".map-right .map-info").css({
			transform: "translateX(0) scale(1)",
		});
		$(".btn-back").removeClass("btn-back-shown");
	});

	let oldID = "";
	$(document).on("click", ".circle", function (e) {
		const ID = $(this).attr("data-id");
		if (oldID === ID) {
			isClicked = false;
			COUNTERS_BTN.removeClass("ts-1");
			DEPARTMENTS_BTN.removeClass("ts-1");
			oldID = "";
			return;
		}
		isClicked = true;
		COUNTERS_BTN.attr("href", `/heatmap/counters/?branch=${ID}`);
		DEPARTMENTS_BTN.attr("href", `/heatmap/departments/?branch=${ID}`);
		COUNTERS_BTN.addClass("ts-1");
		DEPARTMENTS_BTN.addClass("ts-1");
		COUNTERS_BTN.css({
			left: e.pageX - 90,
			top: e.pageY < 230 ? 230 - 10 : e.pageY - 40,
		});
		DEPARTMENTS_BTN.css({
			left: e.pageX + 20,
			top: e.pageY < 230 ? 230 - 10 : e.pageY - 40,
		});
		TOOLTIP.removeClass("tooltip-float-shown");

		oldID = ID;
	});

	$("#zoom-in").click(function (e) {
		$(this).hide();
		$("#zoom-out").show();
		$("#map-zoom").addClass("map-zoom-active");
		$(".tooltip-float").addClass("tooltip-zoom");
	});
	$("#zoom-out").click(function (e) {
		$(this).hide();
		$("#zoom-in").show();
		$("#map-zoom").removeClass("map-zoom-active");
		$(".tooltip-float").removeClass("tooltip-zoom");
	});
});
