const YT="Footend";
const IG="Backend";

const result=IG&&YT         // Evaluate from Left to Right IG && YT

                            // IG is "Backend" → Truthy
                            // Since IG is truthy, JavaScript moves to YT.
                            // YT is "Footend" → Truthy
                            // Since both values are truthy, && returns the last operand (YT)
                            // If any operand is falsy, && returns that falsy value and stops.
                            // If all operands are truthy, && returns the last operand.
                            
console.log(result);        // So, result = "Footend"

