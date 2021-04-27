import * as React from 'react';
import {connect} from 'react-redux';
import {
    addToast,
    Button,
    IDispatch,
    IToastProps,
    Label,
    Section,
    Toast,
    ToastContainer,
    ToastContainerConnected,
} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';

export const ToastExamples: ExampleComponent = () => (
    <Section>
        <ToastsWithLocalState />
        <ToastsWithReduxStore />
    </Section>
);

const ToastsWithLocalState: React.FunctionComponent = () => {
    const [state, setState] = React.useState({
        Success: false,
        Warning: false,
        Error: false,
        Info: false,
        Timed: false,
    });

    return (
        <>
            <Section level={2} title="Toasts with a local state" className="flex">
                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Top left"
                    onClick={() => setState({...state, Success: !state.Success})}
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Middle Earth"
                    onClick={() => setState({...state, Warning: !state.Warning})}
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Top right"
                    onClick={() => setState({...state, Error: !state.Error})}
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Bottom"
                    onClick={() => setState({...state, Timed: !state.Timed})}
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Left again"
                    onClick={() => setState({...state, Info: !state.Info})}
                />
            </Section>

            <ToastContainer left>
                {state.Success && (
                    <Toast
                        key="toast-1"
                        id="toast-1"
                        title="Timed Sucess !!"
                        dismiss={2000}
                        onClose={() => setState({...state, Success: false})}
                    />
                )}
            </ToastContainer>
            <ToastContainer left>
                {state.Info && (
                    <Toast
                        key="toast-1"
                        id="toast-1"
                        title="Left Info !!"
                        type="Info"
                        dismiss={2000}
                        onClose={() => setState({...state, Info: false})}
                    />
                )}
            </ToastContainer>
            <ToastContainer>
                {state.Warning && (
                    <Toast
                        key="toast-1"
                        id="toast-1"
                        title="Warning !!"
                        type="Warning"
                        dismiss={2000}
                        onClose={() => setState({...state, Warning: false})}
                    />
                )}
            </ToastContainer>
            <ToastContainer right>
                {state.Error && (
                    <Toast
                        key="toast-1"
                        id="toast-1"
                        title="Error !!"
                        type="Error"
                        dismiss={2000}
                        onClose={() => setState({...state, Error: false})}
                    />
                )}
            </ToastContainer>
            <ToastContainer bottom>
                {state.Timed && (
                    <Toast
                        key="toast-1"
                        id="toast-1"
                        title="An eternal Success !"
                        dismissible={false}
                        onClose={() => setState({...state, Timed: false})}
                    />
                )}
            </ToastContainer>
        </>
    );
};

const MapDispatchToProps = (dispatch: IDispatch) => ({
    renderToast: (containerId: string, title: string, options?: IToastProps) =>
        dispatch(addToast(containerId, title, options)),
});

const ToastsWithReduxStoreDisconnected: React.FunctionComponent<ReturnType<typeof MapDispatchToProps>> = ({
    renderToast,
}) => {
    const toastContent = () => (
        <ul>
            <li style={{marginBottom: '5px'}}>
                <a href="#">Some Link</a>
            </li>
            <li>Complex React Component</li>
        </ul>
    );

    const toastDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet accumsan ante.';

    return (
        <>
            <Section level={2} title="Toasts with a redux store" className="flex">
                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Information"
                    onClick={() =>
                        renderToast('containerId', 'Information !', {type: 'Info', content: toastDescription})
                    }
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Success"
                    onClick={() => renderToast('containerId', 'Success !', {content: toastDescription})}
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Warning   "
                    onClick={() =>
                        renderToast('containerId', 'Warning !', {type: 'Warning', content: toastDescription})
                    }
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Error"
                    onClick={() => renderToast('containerId', 'Error !', {type: 'Error', content: toastDescription})}
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Timed Success"
                    onClick={() =>
                        renderToast('containerId', 'Timed Success !', {dismiss: 2000, content: toastDescription})
                    }
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="custom JSX"
                    onClick={() => renderToast('containerId', 'Custom JSX !', {content: toastContent})}
                />
                <Button
                    className="btn m0 mr1 mb1"
                    name="custom String"
                    onClick={() => renderToast('containerId', 'Timed Success!', {content: 'I am a string !'})}
                />
            </Section>

            <Section level={2} title="Small toasts" className="flex">
                <Label className="flex">
                    The small version of the toast needs a dismiss value because they don't have an X button to close
                    them manually.
                </Label>
                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Information"
                    onClick={() =>
                        renderToast('containerId', "I'm so small !", {
                            type: 'Info',
                            isSmall: true,
                            dismiss: 2000,
                        })
                    }
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Success"
                    onClick={() =>
                        renderToast('containerId', 'Success !', {
                            isSmall: true,
                            dismiss: 2000,
                        })
                    }
                />

                <Button
                    enabled
                    className="btn m0 mr1 mb1"
                    name="Warning   "
                    onClick={() =>
                        renderToast('containerId', 'Warning !', {type: 'Warning', dismiss: 2000, isSmall: true})
                    }
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Error"
                    onClick={() => renderToast('containerId', 'Error !', {type: 'Error', dismiss: 2000, isSmall: true})}
                />

                <Button
                    className="btn m0 mr1 mb1"
                    name="Plot twist"
                    onClick={() =>
                        renderToast('containerId', 'Small toast dont render content or children, Only title!', {
                            type: 'Error',
                            content: toastContent,
                            isSmall: true,
                            dismiss: 5000,
                        })
                    }
                />
            </Section>
            <ToastContainerConnected id="containerId" />
        </>
    );
};
const ToastsWithReduxStore = connect(null, MapDispatchToProps)(ToastsWithReduxStoreDisconnected);
