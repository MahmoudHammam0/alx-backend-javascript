interface MajorCredits {
    credits: number;
    _majorBrand: "MajorCredits";
}

interface MinorCredits {
    credits: number;
    _minorBrand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits, _majorBrand: "MajorCredits" };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits, _minorBrand: "MinorCredits" };
}
