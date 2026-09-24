Feature: Inventory page validation
    Scenario: Verify inventory items count for different users
    Given User is on SauseDemo application login page
    When User logs in with username " <username>" and password "<password>"
    Then User should see "<result>"
    And Inventory item count should be "<count>"

    Examples: 
    |username       |password     |result        |count |
    |standard_user  |secret_sauce |inventory page|6     |
    |locked_out_user|secret_sauce |error message |0     |
    |problem_user   |secret_sauce |inventory page|6     |

