export class QueryErrorHandler {
    constructor() {
        this._query = "";
        this._error = false;
        this._message = "";
    }

    checkQuery() {
        if (this._query === '' || this._query === ' ') {
            this._error = true;
            this._message = "Query cannot be empty";
        } else if (this._query === 'HOLA') {
            this._error = true;
            this._message = "HEYYYY QUE PASA";
        } else {
            this._error = false;
            this._message = "";
        }
    }

    get query() {
        return this._query;
    }

    set query(query) {
        this._query = query;
    }

    get error() {
        return this._error;
    }

    set error(error) {
        this._error = error;
    }

    get message() {
        return this._message;
    }

    set message(message) {
        this._message = message;
    }
}