class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            newNode.next = newNode;
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
    }

    deleteNode(node) {
        if (node === this.head) {
            if (node.next === this.head) {
                this.head = null;
            } else {
                let current = this.head;
                while (current.next !== this.head) {
                    current = current.next;
                }
                current.next = this.head.next;
                this.head = this.head.next;
            }
        } else {
            let current = this.head;
            while (current.next !== node && current.next !== this.head) {
                current = current.next;
            }
            if (current.next === node) {
                current.next = node.next;
            }
        }
    }
}

function find_survivor(numPeople, skip) {
    if (numPeople <= 0 || skip <= 0) {
        throw new Error("Invalid input. Number of people and skip must be greater than 0.");
    }

    const circle = new CircularLinkedList();

    // Create a circular linked list with the given number of people
    for (let i = 1; i <= numPeople; i++) {
        circle.append(i);
    }

    let current = circle.head;

    while (circle.head.next !== circle.head) {
        // Move to the k-th person (skip - 1 times)
        for (let i = 0; i < skip - 1; i++) {
            current = current.next;
        }

        // Delete the k-th person
        const nextPerson = current.next;
        circle.deleteNode(current);
        current = nextPerson;
    }

    // Return the number of the survivor
    return circle.head.value;
}

// Example usage:
const numPeople = 10;
const skip = 3;
const survivor = find_survivor(numPeople, skip);
console.log(`The survivor is person #${survivor}`);
