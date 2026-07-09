// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Investor type "Other" reveal (only present on investor.html)
const investorType = document.getElementById("investor_type");
const otherField = document.getElementById("other-type-field");
if (investorType && otherField) {
  investorType.addEventListener("change", () => {
    otherField.classList.toggle("hidden", investorType.value !== "Other");
  });
}

// Form submission via Web3Forms (AJAX so we stay on the page)
const form = document.getElementById("apply-form");
if (form) {
  const note = document.getElementById("form-note");
  const btn = document.getElementById("submit-btn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    note.className = "form-note";
    note.textContent = "";

    const accessKey = form.querySelector('[name="access_key"]').value;
    if (accessKey === "YOUR_ACCESS_KEY_HERE") {
      note.className = "form-note err";
      note.textContent =
        "Form not configured yet. Add your Web3Forms access key in this page's HTML.";
      return;
    }

    btn.disabled = true;
    const originalLabel = btn.textContent;
    btn.textContent = "Submitting…";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        form.reset();
        form.style.display = "none";
        note.className = "form-note ok";
        note.textContent = "Got it. We'll be in touch.";
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (err) {
      note.className = "form-note err";
      note.textContent = "Couldn't submit. Please try again. (" + err.message + ")";
      btn.disabled = false;
      btn.textContent = originalLabel;
    }
  });
}
