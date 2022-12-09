DROP TABLE IF EXISTS Items;
CREATE TABLE Items (ItemID INT, ItemMessage TEXT, PRIMARY KEY (`ItemID`));
INSERT INTO Items (ItemID, ItemMessage) VALUES (1, 'This is a test.');
