import {MigrationInterface} from "./MigrationInterface";

/**
 * Represents entity of the migration in the database.
 */
export class Migration {

    // -------------------------------------------------------------------------
    // Public Properties
    // -------------------------------------------------------------------------

    /**
     * Migration id.
     * Indicates order of the executed migrations.
     */
    id: number;

    /**
     * Timestamp of the migration.
     */
    timestamp: number;

    /**
     * Name of the migration (class name).
     */
    name: string;

    /**
     * Migration instance that needs to be run.
     */
    instance?: MigrationInterface;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(timestamp: number, name: string, instance?: MigrationInterface) {
        this.timestamp = timestamp;
        this.name = name;
        this.instance = instance;
    }

}