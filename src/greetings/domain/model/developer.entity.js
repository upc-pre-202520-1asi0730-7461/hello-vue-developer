/**
 * Represents a developer with a first name and last name.
 */
export class Developer {
    /**
     * @type {string}
     * @private
     */
    #firstName;
    /**
     * @type {string}
     * @private
     */
    #lastName;

    /**
     * Creates a new Developer instance.
     *
     * @remarks
     * If either the first name or last name is not provided, it defaults to an empty string.
     * The full name will be "Unknown" if both names are empty.
     * @param {string} firstName - The first name of the developer.
     * @param {string} lastName - The last name of the developer.
     */
    constructor(firstName, lastName) {
        this.#firstName = firstName?.trim() || "";
        this.#lastName = lastName?.trim() || "";
    }

    /**
     * Gets the first name of the developer.
     * @return {string} The first name of the developer.
     */
    get firstName() {
        return this.#firstName;
    }

    /**
     * Gets the last name of the developer.
     * @return {string} The last name of the developer.
     */
    get lastName() {
        return this.#lastName;
    }

    /**
     * Gets the full name of the developer.
     * @return {string} The full name of the developer, or "Unknown" if both names are empty.
     */
    get fullName() {
        return this.#firstName && this.#lastName
            ? `${this.#firstName} ${this.#lastName}`
            : "Unknown";
    }
}