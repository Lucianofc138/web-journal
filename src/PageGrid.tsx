import {GRID_SPACING} from "./styles";

export function TaskBullet() {
    const bulletSize = GRID_SPACING / 8;

    return (
        <div
            style={{
                width: GRID_SPACING,
                height: GRID_SPACING,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    width: bulletSize,
                    height: bulletSize,
                    backgroundColor: '#333',
                    borderRadius: '50%',
                }}
            />
        </div>
    );
}

export function PageLine({
                             children
                         }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            height: GRID_SPACING,
            justifyContent: 'flex-start',
            // backgroundColor: '#faaa',
            padding: '0 8px', // Add some padding for spacing
        }}>
            {children}
        </div>
    );
}

export function PageGrid() {
    return (
        <div style={{ backgroundColor: 'lightyellow', border: '2px solid black', padding: GRID_SPACING * 2, borderRadius: GRID_SPACING }}>
            <div className="dots-grid" style={{ width: GRID_SPACING * 24, height: GRID_SPACING * 36, border: '2px solid red', padding: GRID_SPACING / 2 }}>
                <PageLine>
                    <TaskBullet />
                    <p style={{fontFamily: 'Courier New, monospace'}}>Hola esta es una prueba de YOURNAL versión 0.1.0</p>
                </PageLine>
                <PageLine>
                    <TaskBullet />
                    <p style={{fontFamily: 'Courier New, monospace'}}>La aplicación web para bullet journal</p>
                </PageLine>
                <PageLine>
                    <TaskBullet />
                    <p style={{fontFamily: 'Courier New, monospace'}}>... EN CONSTRUCCIÓN ...</p>
                </PageLine>
            </div>
        </div>
    );
}
