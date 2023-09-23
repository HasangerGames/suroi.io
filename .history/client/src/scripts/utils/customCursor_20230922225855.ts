import $ from "jquery";

export const cursorDimensions = {
    width: 50,
    height: 50
};

export function enableCustomCursor(): void {
    $("#game-ui").on("mousemove", (e) => {
        const customCursor = $("#custom-cursor");
        customCursor.css({
            display: "block",
            position: "relative"
        });
        customCursor.css({
            top: e.pageY - cursorDimensions.height / 2,
            left: e.pageX - cursorDimensions.width / 2
        });
    });
}

export function disableCustomCursor(): void {
    $("#game-ui").off("mousemove");
    const customCursor = $("#custom-cursor");
    customCursor.css({
        display: "none"
    });
}
