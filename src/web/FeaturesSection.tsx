import React from "react";
import {
  Clock,
  Search,
  CircleDollarSign,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const FeaturesSection = () => {
  const featurePairs = [
    {
      problem: {
        icon: <Clock className="lucide problem-icon" />,
        title: "זמן יקר מתבזבז",
        description:
          "ביקורים בחנויות רבות, נסיעות ארוכות, ופגישות שלא מובילות לשום מקום",
      },
      solution: {
        icon: <CheckCircle2 className="lucide solution-icon" />,
        title: "התאמה מושלמת",
        description:
          "עם היצע יצרני וספקי תכשיטים רחב, ובעזרת טכנולוגיות זיהוי תמונה מתקדמת אנחנו נמצא התאמה מושלמת עבורכם",
      },
    },
    {
      problem: {
        icon: <Search className="lucide problem-icon" />,
        title: "חיפוש מתיש",
        description: "קושי במציאת התכשיט שעונה בדיוק על הדרישות שלכם",
      },
      solution: {
        icon: <ShieldCheck className="lucide solution-icon" />,
        title: "חיפוש יעיל וממוקד",
        description:
          "החיפוש עלינו, אנחנו נשתף אתכם רק באופציות הרלוונטיות להעדפות ולתקציב שלכם",
      },
    },
    {
      problem: {
        icon: <AlertTriangle className="lucide problem-icon" />,
        title: "השוואת מחירים מסובכת",
        description: "ומרדף אחרי המחיר הטוב ביותר",
      },
      solution: {
        icon: <CircleDollarSign className="lucide solution-icon" />,
        title: "חוויה נעימה ובטוחה",
        description:
          "תהליך פשוט ומהיר, ושירות נעים - ללא שום התחייבות וללא עלות",
      },
    },
  ];

  return (
    <section id="features">
      <div className="container">
        {/* Headers */}
        <div className="feature-pair header-row">
          <div className="feature-item">
            <h2>הדרך הישנה</h2>
          </div>
          <div className="feature-item">
            <h2>הדרך שלנו</h2>
          </div>
        </div>

        {/* Feature Pairs */}
        <div className="features-content">
          {featurePairs.map((pair, index) => (
            <div key={index} className="feature-pair">
              <div className="feature-item">
                <div className="icon-wrapper">{pair.problem.icon}</div>
                <h3>{pair.problem.title}</h3>
                <p>{pair.problem.description}</p>
              </div>

              <div className="feature-item">
                <div className="icon-wrapper">{pair.solution.icon}</div>
                <h3>{pair.solution.title}</h3>
                <p>{pair.solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
