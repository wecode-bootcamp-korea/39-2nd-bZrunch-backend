const { appDataSource } = require('./data-source');

const showCart = async (user_id) => {
    const result = await appDataSource.query(
        `
        SELECT
            c.id,
            w.title,
            w.content,
            w.header_image,
            w.price,
            (
                SELECT
                    u.name
                FROM
                    users u
                WHERE u.id = w.user_id
            ) as authors,
            colors.color
        FROM
            carts c
        LEFT JOIN writings w ON w.id = c.writing_id
        LEFT JOIN users u ON u.id = c.user_id
        LEFT JOIN colors ON colors.id = w.color_id
        WHERE u.id = ?
        `,
        [user_id]
    );
    return result;
};

module.exports = { showCart };
