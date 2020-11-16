class Tabler {
    static generateBody(headerCount, bodyCount, bodyCells) {
        let body = ``;
        for (let cell = 0; cell < bodyCount;) {
            body = body.concat(`\n        <tr>\n`);

            for (let row = 0; row < headerCount; row++) {
                body = body.concat(`            <td>${bodyCells[cell] ? bodyCells[cell] : ``}</td>\n`);
                cell++;
            }
            body = body.concat(`        </tr>`);
        }
        return body;
    }
}
