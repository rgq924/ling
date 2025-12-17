
function conjugateVerb(verbStem, subjectPronoun) {
    const subjectPrefixes = ["ni", "u", "a", "tu", "m", "wa"];
    const pronouns = ["I", "you (singular)", "he/she/it", "we", "you (plural)", "they"];
    
    const presentInfix = "na";
    const pastInfix = "li";
    const futureInfix = "ta";
    const finalVowel = "a";

    verbStem = verbStem.toLowerCase().trim();

    if (verbStem.length < 1) {
        return "Invalid verb.";
    }

    const index = pronouns.indexOf(subjectPronoun);
    
    if (index > -1) {
        const prefix = subjectPrefixes[index];
        
        // Conjugation pattern: SubjectPrefix + TenseInfix + Verb + FinalVowel
        const presentVerb = `${prefix}${presentInfix}${verbStem}${finalVowel}`;
        const pastVerb = `${prefix}${pastInfix}${verbStem}${finalVowel}`;
        const futureVerb = `${prefix}${futureInfix}${verbStem}${finalVowel}`;
        
        return { present: presentVerb.slice(0,-1), past: pastVerb.slice(0,-1), future: futureVerb.slice(0,-1) };
    } else {
        return "Invalid subject pronoun.";
    }
}

// Function to handle user interaction and update the UI
function displayConjugation() {
    const verbStemInput = document.getElementById('verbStemInput');
    const subjectPronounSelect = document.getElementById('subjectPronounSelect');
    const resultsArea = document.getElementById('resultsArea');

    const stem = verbStemInput.value;
    const pronoun = subjectPronounSelect.value;

    const conjugatedVerbs = conjugateVerb(stem, pronoun);
    

    resultsArea.innerHTML = ''; // Clear previous results

    if (typeof conjugatedVerbs === 'string') {
        // Handle the error case
        resultsArea.innerHTML = `<div class="error">${conjugatedVerbs}</div>`;
    } else {
        // Display the successful results
        resultsArea.innerHTML = `
            <div class="result-card">
                <h3>Results for "${pronoun}" using verb "${stem}"</h3>
                <p><strong>Present Tense:</strong> <strong><span style="color: red;">${conjugatedVerbs.present}</span></strong></p>
                <p><strong>Past Tense:</strong> <strong><span style="color: red;">${conjugatedVerbs.past}</span></strong></p>
                <p><strong>Future Tense:</strong> <strong><span style="color: red;">${conjugatedVerbs.future}</span></strong></p>
            </div>
        `;
    }
}
