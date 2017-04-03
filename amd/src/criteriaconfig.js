// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Processes the feedback criteria config data for the selected criteria set.
 *
 * @module     assignfeedback_structured/criteriaconfig
 * @class      criteriaconfig
 * @package    assignfeedback_structured
 * @copyright  2017 Lancaster University {@link http://www.lancaster.ac.uk/}
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @author     Jun Pataleta <jun@moodle.com>
 * @author     Tony Butler <a.butler4@lancaster.ac.uk>
 */
define(['jquery'], function($) {
    return {
        /**
         * Init function.
         *
         * @param {string} configData The config data.
         */
        init: function(configData) {
            $('#criteriaset-use-button', window.parent.document).on('click', function() {
                // Make sure the window has loaded before we perform processing.
                $(window).ready(function() {
                    if (window != top) {
                        // Send config data to be processed by the parent window.
                        parent.processCriteriaConfigData(configData);
                    }
                });
            });
        }
    };
});