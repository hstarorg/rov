export class Store {
  /**
   * The store options
   * @param {object} options
   * @param {object} options.state
   * @param {object} options.mutations
   * @param {object} options.actions
   * @param {object} options.getters
   * @param {object} options.modules
   * @param {Array<Function>} options.plugins
   */
  constructor(options) {
    this.options = options;
  }

  commit(type, payload, options) {}

  dispatch(type, payload, options) {}
}
