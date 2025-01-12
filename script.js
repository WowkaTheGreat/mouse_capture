const fullscreenArea = document.getElementById('fullscreen-area');
const button = document.getElementById('enter-fullscreen');

document.addEventListener("pointerlockchange", () => {
    if (document.pointerLockElement) {
      console.log("Pointer locked!");
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      console.log("Pointer unlocked!");
      document.removeEventListener("mousemove", handleMouseMove);
    }
  });

let h = document.getElementById("pozycja");

function handleMouseMove(event) {
// Relative mouse movement
const deltaX = event.movementX;
const deltaY = event.movementY;
h.innerText =`Mouse moved: ΔX=${deltaX}, ΔY=${deltaY}`;
}

// Request Pointer Lock
function lockPointer(element) {
element.requestPointerLock();
}

// Example: Attach to a button
document.getElementById("fullscreen-area").addEventListener("click", () => {
const element = document.getElementById("fullscreen-area");
lockPointer(element);
});

// Funkcja wychodzenia z trybu pełnoekranowego
function exitFullscreen() {
    if (document.exitPointerLock) {
        document.exitPointerLock();
    }
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

// Obsługa przycisku
button.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    enterFullscreenAndLockPointer();
    button.textContent = "Wyjdź z trybu pełnoekranowego";
  } else {
    exitFullscreen();
    button.textContent = "Wejdź w tryb pełnoekranowy";
  }
});

// Wyjście z trybu fullscreen po naciśnięciu Escape
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    document.exitPointerLock();
    button.textContent = "Wejdź w tryb pełnoekranowy";
  }
});
