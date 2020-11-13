import React from "react";
import { Input } from "./Input";

interface Props {
    value?: number,
    onChange: (value: number) => void,
    placeholder?: string,
    autoFocus?: boolean
}

interface State {
    
}

export class IntegerInput extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        
        this.state = {
            
        };
    }
    
    render() {
        return (
            <Input
                type="text"
                placeholder={this.props.placeholder}
                value={this.props.value ?? ""}
                onChange={e => this.props.onChange(parseInt(e.target.value))}
                autoFocus={this.props.autoFocus}
            />
        );
    }
}