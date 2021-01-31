import { Clouds } from "../Clouds";
import { Summary } from "../Summary";
import { Temperature } from "../Temperature";
import { Wind } from "../Wind";

export interface Weather {
    summary: Summary;
    temperature: Temperature;
    wind: Wind;
    clouds: Clouds;
    timestamp: Date;
}