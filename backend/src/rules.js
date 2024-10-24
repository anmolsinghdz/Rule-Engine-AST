// Data structure for AST Node
class Node {
    constructor(type, left = null, right = null, value = null) {
        this.type = type;   // "operator" or "operand"
        this.left = left;   // Left child Node
        this.right = right; // Right child Node
        this.value = value; // Value for operand nodes
    }
}

// Function to create AST from rule string
function createRule(ruleString) {
    // Basic parsing logic to create an AST (this can be expanded)
    const trimmedRule = ruleString.replace(/\s+/g, ' '); // Clean up whitespace
    const rootNode = parseRule(trimmedRule);
    return rootNode;
}

// Function to parse the rule string (placeholder example)
function parseRule(ruleString) {
    // Split by AND/OR for demonstration purposes
    const tokens = ruleString.split(/ AND | OR /);
    const root = new Node("operator", null, null, tokens[1]); // Example logic
    root.left = new Node("operand", null, null, tokens[0]);
    root.right = new Node("operand", null, null, tokens[2]);
    return root;
}

// Function to evaluate the AST against user data
function evaluateRule(ast, user_data) {
    const { age, department, salary, experience } = user_data;

    // Example evaluation logic (this needs to be extended based on your rule structure)
    if (ast.value === 'age > 30' && age > 30) {
        return true;
    } else if (ast.value === "department = 'Sales'" && department === 'Sales') {
        return true;
    }

    // Add more evaluation logic based on the AST structure
    return false;
}

module.exports = { createRule, evaluateRule };
